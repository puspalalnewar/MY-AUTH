const userModel = require("../models/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../services/nodeMailer");

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    console.log("I am in");
    const isUserAlreadyExist = await userModel.findOne({ email });
    const decodedPassword = await bcrypt.hash(password, 10);
    if (!isUserAlreadyExist) {
      const user = await userModel.create({
        name,
        email,
        password: decodedPassword,
      });
      await user.save();
      return res.status(201).json({
        msg: "Sign up successful",
        success: true,
        userName: name,
        userEmail: email,
      });
    } else {
      return res
        .status(409)
        .json({ msg: "User already exist", success: false });
    }
  } catch (error) {
    return res.status(409).json({ success: "false", msg: error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      const decodedPassword = await bcrypt.compare(password, user.password);
      if (decodedPassword) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "24h",
        });
        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
        });
        return res.status(200).json({
          msg: "User logged in successfully",
          token: token,
          name: user.name,
          isAccountVerified: user.isAccountVerified,
          success: true,
        });
      } else {
        return res
          .status(409)
          .json({ msg: "Incorrect password", success: false });
      }
    } else {
      return res.status(401).json({
        msg: "You dont have account!",
        success: false,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Internal server error", success: false });
  }
};

// send email verification otp to gmail
const sendOtp = async (req, res) => {
  const id = req.userId;
  try {
    const user = await userModel.findById(id);
    const userEmail = user.email;

    const otp = Math.floor(100000 + Math.random() * 900000);
    user.accountVerificationOtp = otp.toString();
    await user.save();

    await sendEmail(userEmail, "OTP for email verification", otp);

    return res.status(200).json({
      msg: "OTP send to your gmail",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Internal server error",
      success: false,
    });
  }
};

const verifyOtp = async (req, res) => {
  const { otp } = req.body;
  const id = req.userId;
  try {
    const user = await userModel.findById(id);
    const emailVerificationOtp = user.accountVerificationOtp;
    if (otp == emailVerificationOtp) {
      user.isAccountVerified = true;
      user.accountVerificationOtp = "";
      await user.save();
      return res.status(200).json({
        msg: "Account verified successfully!!",
        success: true,
      });
    } else {
      return res.status(401).json({
        msg: "Invalid OTP",
        success: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Internal server error",
      success: false,
    });
  }
};

const isUserVerified = async (req, res) => {
  const id = req.userId;
  try {
    const user = await userModel.findById(id);
    if (user.isAccountVerified) {
      return res.status(200).json({
        msg: "User is verified.",
        userName: user.name,
        success: true,
      });
    } else {
      return res.status(401).json({
        msg: "User not verified!!",
        success: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Internal server error",
      success: false,
    });
  }
};

module.exports = { signupUser, loginUser, sendOtp, verifyOtp, isUserVerified };

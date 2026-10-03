const userModel = require("../models/auth.model");
const bcrypt = require("bcrypt");

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
        return res
          .status(200)
          .json({ msg: "User logged in successfully", success: true });
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

const verifyEmail = async (req, res) => {
  
};

module.exports = { signupUser, loginUser };

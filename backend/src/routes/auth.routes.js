const express = require("express");
const {
  signupUser,
  loginUser,
  sendOtp,
  verifyOtp,
} = require("../controllers/auth.controller");
const verifyJwt = require("../middlewares/verifyJwtToken");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/sendotp", verifyJwt, sendOtp);
router.post("/verifyotp", verifyJwt, verifyOtp);

module.exports = router;

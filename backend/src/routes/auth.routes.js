const express = require("express");
const {
  signupUser,
  loginUser,
  sendOtp,
  verifyOtp,
  isUserVerified,
  logoutUser,
  isUserAuth,
} = require("../controllers/auth.controller");
const verifyJwt = require("../middlewares/verifyJwtToken");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/sendotp", verifyJwt, sendOtp);
router.post("/verifyotp", verifyOtp);
router.post("/isuserverified", verifyJwt, isUserVerified);
router.post("/logout", logoutUser);
router.get("/user", verifyJwt, isUserAuth);

module.exports = router;

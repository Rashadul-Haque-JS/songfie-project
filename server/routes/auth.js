const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth/loginController")
const { signup } = require("../controllers/auth/signupController")
const { imageUpload } = require("../middleware/images");
const{forgotPassword,resetPassword} = require("../controllers/auth/retrivePassword")


router.post("/signup", imageUpload, signup)
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.get("/resetPassword/:id/:token", resetPassword);

module.exports = router;
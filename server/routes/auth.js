const express = require("express");
const router = express.Router();
const { login } = require("../controllers/loginController")
const { signup } = require("../controllers/signupController")
const { imageUpload } = require("../middleware/images");


router.post("/signup", imageUpload, signup)

router.post("/login", login);

module.exports = router;
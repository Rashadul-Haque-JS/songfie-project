const express = require("express");
const router = express.Router();

const {getAvatarByUser} = require("../controllers/imageController")

router.get("/getUsersAvatar/:userId", getAvatarByUser); 

// router.patch(
//     "/updateAvatar",
//     requireAuthUser,
//     updateAvatar
// );

// router.delete("/delAvatar", requireAuthUser, delAvatar); 

module.exports = router;
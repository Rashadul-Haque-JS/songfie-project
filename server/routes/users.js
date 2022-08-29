const express = require("express");
const router = express.Router();

const {
    // requireAuthAdmin,
    requireAuthUser,

} = require("../middleware/auth");

const {
    getUser,
    updateUser,
    deleteUser,
} = require("../controllers/userController");

router.get("/allUsers", getUser); //req.query
router.patch(
    "/updateUser",
    requireAuthUser,
    updateUser
);
router.delete("/deletUser", requireAuthUser, deleteUser);

module.exports = router;
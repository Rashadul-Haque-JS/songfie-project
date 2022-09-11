const path = require("path");
const fs = require("fs");
const { Users } = require("../models/users.js");


const getAvatarByUser = async (req, res) => {
    try {
        const files = fs.readdirSync(path.join("assets", "images"));
        const { userId } = req.params;
        console.log(req.params)
        const user = await Users.findOne({ _id: userId});

  
        console.log(user)

        const isFound = files.some((file) => file == user.avatar);
        console.log(isFound);
        if (!user.avatar) {
            throw new Error("This user has no avatar!");
        } else if (!isFound) {
            throw new Error("Profile image is missing on images directory!");
        } else {
            res.sendFile(user.avatar, { root: "assets/images" });
        }
    } catch (error) {
        res.status(404).json(error.message);
    }
};

module.exports = { getAvatarByUser };
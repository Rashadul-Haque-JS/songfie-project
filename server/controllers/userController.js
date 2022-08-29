const { Users } = require("../models/users");

const getUser = async (req, res) => {
    try {
    const allUsers = await Users.find({}).exec();
     res.json(allUsers);

    } catch (error) {
        res.status(400).json(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const data = Object.keys(req.body);
        const { _id } = req.user;
        const user = await Users.findById({ _id }).select("-password");

        // Check email existence
        const allUsers = await Users.find({}).exec();
        const emailExist = allUsers.some((user) => user.email == req.body.email);

        if (emailExist) {
            throw new Error("Email already exist!");
        }

        data.forEach((key) => {
            if (key && key !== "role") {
                user[key] = req.body[key];
            }
        });
        await user.save();

        res.json("User info updated!");
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { email } = req.body;
        await Users.deleteOne({ email });
        res.json("user deleted!");
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = { getUser, updateUser, deleteUser };

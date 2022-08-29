const { Users } = require("../models/users");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    const { name, email, password, username, role } = req.body.name;
    console.log(req.body.name);
    const userFound = await Users.findOne({ email }).exec();

    let filename = "";

    if (req.file && !req.fileError) {
        filename = req.file.filename;
    }

    if (req.fileError) {
        throw new Error(req.fileError);
    }

    try {
        if (!userFound) {
            const user = await new Users({
                name,
                username,
                email,
                password,
                avatar: filename,
                role

            });

            await user.save();

            user.comparePassword(password, async (err, isMatched) => {
                if (err) {
                    throw new Error("Something is wrong!");
                } else {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                        expiresIn: "1d",
                    });

                    const newUser = await Users.findOne({ _id: user._id }).select(
                        "-password"
                    );

                    res.json({ newUser, token, message: "User created successfully!" });
                }
            });
        } else {
            throw new Error("User already exist!");
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

module.exports = { signup };
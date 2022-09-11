const { Users } = require("../../models/users");
const { Token } = require("../../models/token");


const jwt = require("jsonwebtoken");
const { InvalidCredentials, } = require("../../error/error");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await Users.findOne({ email }).exec();
        if (!user) throw new InvalidCredentials();

        user.comparePassword(password, async (err, isMatched) => {
            if (err) {
                throw new Error("Loging problem :" + err);
            } else if (!isMatched) {
                res.status(400).json("Wrong password!");
            } else {
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: "1d",
                });

                const userData = await Users.findOne({ _id: user._id }).select(
                    "-password"
                );

                res.json({ userData, token });
            }



        });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = { login };

const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const { Users } = require("../../models/users");
const { Token } = require("../../models/token");

const jwt = require("jsonwebtoken");

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        let user = await Users.findOne({ email }).exec();
        console.log(user);

        if (!user) {
            throw new Error('Email not found!')
        } else {
            const secret = process.env.JWT_SECRET + user.password
            const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: '1d' })

            const link = `http://localhost:8000/api/resetPassword/${user._id}/${token}`
            // const transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //         user: 'mohmmed.haque@iths.se',
            //         pass: 'Miio543@'
            //     }
            // });

            // const mailOptions = {
            //     from: 'youremail@gmail.com',
            //     to: 'mrhaque179@yahoo.com',
            //     subject: 'Reset password link - Songfie',
            //     text: link
            // };

            // transporter.sendMail(mailOptions, function (error, info) {
            //     if (error) {
            //         console.log(error);
            //     } else {
            //         console.log('Email sent: ' + info.response);
            //     }
            // });
            console.log(link);

            res.json({ message: `Password reset link has been sent to ${email}` })
        }




    } catch (error) {
        res.status(400).json(error.message);
    }
};


const resetPassword = async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    let user = await Users.findOne({ _id: id }).exec();
    if (!user) {
        throw new Error('Email not found!')
    } else {
        const secret = process.env.JWT_SECRET + user.password
        try {
            const verify = jwt.verify(token, secret)
            res.json({ 'email': verify.email })
        } catch (error) {
            res.status(400).json(error.message);
        }

    }



};

const resetNow = async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body

    let user = await Users.findOne({ _id: id }).exec();
    if (!user) {
        throw new Error('Email not found!')
    } else {
        const secret = process.env.JWT_SECRET + user.password
        try {
            const verify = jwt.verify(token, secret)
            const hashedPassword = await bcrypt.hash(password, 12)
            user[password] = hashedPassword
            await user.save()
            res.json({ message: 'Password updated successfully.' })
        } catch (error) {
            res.status(400).json(error.message);
        }


    }



};

module.exports = { forgotPassword, resetPassword, resetNow };

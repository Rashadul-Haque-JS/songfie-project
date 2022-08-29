const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        username: {
            type: String,
            trim: true,
            required: true,
        },

        email: {
            type: String,
            trim: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: false,
            default: "https://robohash.org/voluptatemquivoluptatum.png?size=50x50&set=set1"
        },
        songId: [],
        role: {
            type: String,
            enum: ["admin", "client"],
            required: true,
            default: "client",
        },
    },
    {
        timestamps: false,
    }
);

usersSchema.pre("save", function hashPassword(next) {
    if (!this.isModified("password")) {
        return next();
    }

    bcrypt.hash(this.password, 12, (err, hashedPassword) => {
        if (err) return next(err);
        this.password = hashedPassword;
        next();
    });
});

usersSchema.methods.comparePassword = function (password, next) {
    bcrypt.compare(password, this.password, (err, isMatched) => {
        if (err) return next(err, false);
        else {
            if (!isMatched) {
                return next(null, isMatched);
            } else {
                return next(null, this);
            }
        }
    });
};

const Users = mongoose.model("Users", usersSchema);

module.exports = { Users };
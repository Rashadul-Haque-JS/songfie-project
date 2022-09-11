const mongoose = require("mongoose");

const songsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            unique: false,
            required: true,
        },
        user: {
            type: String,
        },
        userId: {
            type: String,
            required: true,
            default: '631ce74c97675e3ae3f45928',
        },
        original_singer: {
            type: String,
            required: false,
            default: "Not provided",
        },
        track: {
            type: String,
        },

        image: {
            type: String,
        },

        isPlaying: {
            type: Boolean,
            enum: [true, false],
            default: false,
        },

       likes:{
           type: Number,
           default: 0,
        },
        language: {
            type: String,
            required: true,
        },
        comments:[]
    },
    {
        timestamps: true,
    }
);

const Songs = mongoose.model("Songs", songsSchema);

module.exports = { Songs };

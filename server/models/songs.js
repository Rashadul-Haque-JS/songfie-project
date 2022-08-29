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
            default: '630c7cf287eb8940bf137c30',
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

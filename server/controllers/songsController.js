const { Unauthorized } = require("../error/error");
const { Songs } = require("../models/songs");
const { User } = require("../models/users")

const createSong = async (req, res) => {
    try {
        const { title,original_singer,track,language } = req.body;

        const { id } = req.user;

        let filename = "";

        if (req.file && !req.fileError) {
            filename = req.file.filename;
        }

        if (req.fileError) {
            throw new Error(req.fileError);
        }

        const user = await User.findById({ _id: id }).select("-password");


        const task = await new Songs({
            title,
            user: user.user,
            userId: user._id,
            original_singer,
            track,
            image: filename,
            language,
            comments:[]
        });

        await task.save();
        res.json({ task, message: "A new task created!" });
    } catch (error) {
        res.status(400).json(error.message);
    }
};


const allSongs = async (req, res) => {
    try {
        const songs = await Songs.find({}).exec();
        res.json(songs);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const updateSong = async (req, res) => {
    try {
        const data = Object.keys(req.body);
        const { _id } = req.user;
        const id = req.body._id;
        const user = await User.findById({ _id }).select("-password");
        const song = await Songs.findById({ id }).exec();

        if (song.userId !== user._id) {
            throw new Unauthorized();
        }

        data.forEach((key) => {
            if (key &&  key !=="userId"|| key !== "user" || key !== "likes" || key !== "comments") {
                song[key] = req.body[key];
            }
        });
        await song.save();

        res.json("song is updated!");
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const deleteSong = async (req, res) => {
    try {
        const { _id } = req.body;
        await Songs.deleteOne({ _id });
        res.json("Song is deleted!");
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {createSong, allSongs, updateSong, deleteSong };

const { Songs } = require("../models/songs");
const { songfieDB } = require("./connections");

const songs = require("./songs.json");


const createSongs = async () => {
    await Songs.deleteMany({});
    songs.forEach(async (song) => {
        const newSongs = await new Songs(song);
        await newSongs.save();
    });

    console.log(`DONE! ${songs.length} SONGS HAVE BEEN INSERTED INTO DB.`);
};

songfieDB();
createSongs()

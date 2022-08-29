const express = require("express");
const router = express.Router();
const { createSong, allSongs, updateSong, deleteSong } = require("../controllers/songsController")
const { imageUpload } = require("../middleware/images");


router.post('/createSong',imageUpload, createSong)
router.get("/allSongs", allSongs)
router.patch(
    "/updateSong",
    updateSong

);
router.delete("/deleteSongs", deleteSong);

module.exports = router;
require("dotenv").config();
const mongoose = require("mongoose");

const { DATABASE_URL } = process.env;

const songfieDB = async () => {
    await mongoose.connect(`${DATABASE_URL}songfie`);
    console.log("connected");
   
};

module.exports = { songfieDB };
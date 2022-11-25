require("dotenv").config();
const mongoose = require("mongoose");

const songfieDB = async () => {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connected");
   
};

module.exports = { songfieDB };

const { Users } = require("../models/users");
const { Songs } = require("../models/songs");
const { songfieDB } = require("./connections");

const users = require("./users.json");
const songs = require("./songs.json");

const createUsers = async () => {
    await Users.deleteMany({});

    users.forEach(async (user) => {
        const newUsers = await new Users(user);
        await newUsers.save();
    });

    console.log(`DONE! ${users.length} USERS HAVE BEEN INSERTED INTO DB.`);
};




songfieDB();
createUsers();


const express = require("express");
const routes = require("./routes");
const { songfieDB} = require("./db/connections");
const { errorHandler } = require("./middleware/handleError");

const app = express();
const cors = require("cors");
app.use(cors())
const morgan = require("morgan");
require("dotenv").config();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


// routers

app.use("/api", routes.auth);
app.use("/api/users", routes.users);
app.use("/api/songs", routes.songs);
app.use("/api/images", routes.images);


app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    songfieDB();
    console.log(`SERVER STARTED ON PORT: ${PORT}`);
});
// All is done

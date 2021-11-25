const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");

//SETUP ENVIRONMENT VARIABLES
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

var app = express();

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

if ((process.env.NODE_ENV = "development")) {
  app.use(cors({ origin: "http://localhost:3000" }));
}

//Connect to database
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => {
    console.log(`DB CONNECTION ERROR: ${err.message}`);
  });

readdirSync("./routes").map((route) => {
  app.use("/api", require("./routes/" + route));
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

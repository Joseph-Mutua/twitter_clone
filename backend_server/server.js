const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");

//SETUP ENVIRONMENT VARIABLES
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

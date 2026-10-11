const express = require("express");
const cors = require("cors");
const connectDb = require("./src/config/database");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

connectDb();

app.use(cors());
app.use(express.json());

app.listen(() => {
  console.log("welcome port :", port);
});

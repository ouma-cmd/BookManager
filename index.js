import express from "express";
import cors from "cors";
import connectDb from "./src/config/database.js";
import authRegister from "./src/modules/auth/router/auth.route.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRegister);

app.listen(port, () => {
  console.log("welcome port :", port);
});

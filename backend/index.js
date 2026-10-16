import express from "express";
import cors from "cors";
import connectDb from "./src/config/database.js";
import auth from "./src/modules/auth/router/auth.route.js";
import admin from "./src/modules/admin/router/admin.route.js"
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

connectDb();

app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);

app.use("/api/Admin", admin)

app.listen(port, () => {
  console.log("welcome port :", port);
});

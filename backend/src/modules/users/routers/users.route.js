import express from "express";
import {
  getBookController,
  getBookByIdController,
} from "../controllers/getBook.Controller.js";
import authMiddl from "../../admin/middleware/auth.middleware.js";
import roleMiddleware from "../Middleware/role.middleware.js";

const route = express.Router();

route.get("/getBooks", authMiddl, roleMiddleware, getBookController);
route.get("/getBookId", authMiddl, roleMiddleware, getBookByIdController);

export default route;

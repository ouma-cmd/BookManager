import express from "express";
import {
  creationBookController,
  deleteBookController,
  getBookByIdController,
  getBookController,
  updateBookController,
} from "../controller/book.controller.js";
import authMiddl from "../middleware/auth.middleware.js";
import roleMiddl from "../middleware/role.middl.js";
import {
  deleteUserController,
  getUserByIdController,
  getUserController,
} from "../controller/user.controller.js";
import dashboardController from "../controller/dash.controller.js";

const route = express.Router();

//crud book
route.post("/creationBook", authMiddl, roleMiddl, creationBookController);
route.get("/getBook", authMiddl, roleMiddl, getBookController);
route.get("/getBookById/:id", authMiddl, roleMiddl, getBookByIdController);
route.put("/updateBook/:id", authMiddl, roleMiddl, updateBookController);
route.delete("/deleteBook/:id", authMiddl, roleMiddl, deleteBookController);

//crud user
route.get("/getuser", authMiddl, roleMiddl, getUserController);
route.get("/getuserById/:id", authMiddl, roleMiddl, getUserByIdController);
route.delete("/deleteuser/:id", authMiddl, roleMiddl, deleteUserController);

//dashboard
route.get("/dashboard", authMiddl, roleMiddl, dashboardController);

export default route;

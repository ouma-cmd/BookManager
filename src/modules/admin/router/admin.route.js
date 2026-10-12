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

const route = express.Router();

//crud book
route.post("/creationBook", authMiddl, roleMiddl, creationBookController);
route.get("/getBook", authMiddl, roleMiddl, getBookController);
route.get("/getBookById/:id", authMiddl, roleMiddl, getBookByIdController);
route.put("/updateBook/:id", authMiddl, roleMiddl, updateBookController);
route.delete("/deleteBook/:id", authMiddl, roleMiddl, deleteBookController);

export default route;

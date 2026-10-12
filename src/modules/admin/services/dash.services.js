import User from "../../auth/Model/auth.model.js";
import bookModel from "../models/book.model.js";

async function dashboard() {
  const calculUser = await User.countDocuments();
  const calculBook = await bookModel.countDocuments();

  return {
    Book: calculBook,
    user: calculUser,
  };
}

export default dashboard;

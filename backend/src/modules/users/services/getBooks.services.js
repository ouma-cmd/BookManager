import bookModel from "../../admin/models/book.model.js";

async function getBooks({
  page = 1,
  limit = 10,
  category,
  language,
  rating,
  search,
}) {
  const filter = {};
  if (category) {
    filter.category = category;
  }
  if (language) {
    filter.language = language;
  }
  if (rating) {
    filter.rating = rating;
  }

  if (search) {
    filter.title = {
      $regex: search,
      $options: "i",
    };
  }
  const skip = (page - 1) * limit;
  const findBook = await bookModel.find(filter).skip(skip).limit(limit);
  const totalBook = await bookModel.countDocuments(filter);

  return {
    data: findBook,
    currentPage: page,
    totalBooks: totalBook,
    totalPages: Math.ceil(totalBook / limit),
  };
}

async function getbooksById(id) {
  const findId = await bookModel.findById(id);
  if (!findId) {
    return null;
  }
  return findId;
}

export {
  getBooks,
  getbooksById,
};

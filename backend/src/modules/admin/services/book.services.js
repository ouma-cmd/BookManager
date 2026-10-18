import bookModel from "../models/book.model.js";

async function creationBook(
  image,
  title,
  author,
  category,
  summary,
  description,
  publicationDate,
  language,
  rating,
  externalLink,
) {
  const findtitle = await bookModel.findOne({ title });
  if (findtitle) {
    return null;
  }
  const creeBook = await bookModel.create({
    image,
    title,
    author,
    category,
    summary,
    description,
    publicationDate,
    language,
    rating,
    externalLink,
  });
  return creeBook;
}

async function getBook({ page = 1, limit = 10, category, search }) {
  const filter = {};
  if (category) {
    filter.category = category;
  }

  if (search) {
    filter.title = {
      $regex: search,
      $options: "i",
    };
  }

  const skip = (page - 1) * limit;
  const afficherBook = await bookModel.find(filter).skip(skip).limit(limit);
  const totalBook = await bookModel.countDocuments(filter);

  return {
    data: afficherBook,
    currentPage: page,
    totalBooks: totalBook,
    totalPages: Math.ceil(totalBook / limit),
  };
}

async function getbookById(id) {
  const findId = await bookModel.findById(id);
  if (!findId) {
    return null;
  }
  return findId;
}

async function updateBooks(
  id,
  image,
  title,
  author,
  category,
  summary,
  description,
  publicationDate,
  language,
  rating,
  externalLink,
) {
  const findId = await bookModel.findById(id);
  if (!findId) {
    return null;
  }
  const update = await bookModel.findByIdAndUpdate(
    id,
    {
      title,
      image,
      author,
      category,
      summary,
      description,
      publicationDate,
      language,
      rating,
      externalLink,
    },
    { new: true },
  );
  if (!update) {
    return null;
  }
  return update;
}

async function deletBook(id) {
  const findId = await bookModel.findByIdAndDelete(id);
  if (!findId) {
    return null;
  }
  return findId;
}

export { creationBook, getBook, getbookById, updateBooks, deletBook };

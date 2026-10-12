import bookModel from "../models/book.model.js";

async function creationBook(
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

async function getBook() {
  const afficherBook = await bookModel.find();
  if (afficherBook === 0) {
    return null;
  }
  return afficherBook;
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

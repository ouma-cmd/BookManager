import {
  creationBook,
  deletBook,
  getBook,
  getbookById,
  updateBooks,
} from "../services/book.services.js";

async function creationBookController(req, res) {
  const {
    title,
    author,
    category,
    summary,
    description,
    publicationDate,
    language,
    rating,
    externalLink,
  } = req.body;

  const creatBook = await creationBook(
    title,
    author,
    category,
    summary,
    description,
    publicationDate,
    language,
    rating,
    externalLink,
  );
  if (!creatBook) {
    return res.status(400).json("not valide");
  }
  return res.status(200).json(creatBook);
}

async function getBookController(req, res) {
  const affichLivre = await getBook();
  if (!affichLivre) {
    return res.status(400).json("not fond the book");
  }
  return res.status(200).json(affichLivre);
}

async function getBookByIdController(req, res) {
  const id = req.params.id;
  const getBook = await getbookById(id);
  if (!getBook) {
    return res.status(400).json("not fond");
  }
  return res.status(200).json(getBook);
}

async function updateBookController(req, res) {
  const id = req.params.id;
  const {
    title,
    author,
    category,
    summary,
    description,
    publicationDate,
    language,
    rating,
    externalLink,
  } = req.body;

  const updatbook = await updateBooks(
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
  );
  if (!updatbook) {
    return res.status(400).json("error");
  }
  return res.status(200).json(updatbook);
}

async function deleteBookController(req, res) {
  const id = req.params.id;
  const delet = await deletBook(id);
  if (!delet) {
    return res.status(400).json("error");
  }
  return res.status(200).json(delet);
}

export {
  creationBookController,
  getBookController,
  getBookByIdController,
  updateBookController,
  deleteBookController,
};

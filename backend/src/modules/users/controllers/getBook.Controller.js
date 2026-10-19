import { getBooks, getbooksById } from "../services/getBooks.services.js";

async function getBookController(req, res) {
  const { category, language, rating, search } = req.query;
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);

  const getBook = await getBooks({
    page,
    limit,
    category,
    language,
    rating,
    search,
  });
  if (!getBook) {
    return res.status(400).json("not found");
  }
  return res.status(200).json(getBook);
}

async function getBookByIdController(req, res) {
  const id = req.params.id;
  const getBookId = await getbooksById(id);
  return res.status(200).json(getBookId);
}
export { getBookController, getBookByIdController };

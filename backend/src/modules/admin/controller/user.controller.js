import {
  deleteUserById,
  getuser,
  getUserById,
} from "../services/user.services.js";

async function getUserController(req, res) {
  const { page, limit } = req.query;

  const getUsers = await getuser(Number(page), Number(limit));

  return res.status(200).json(getUsers);
}

async function getUserByIdController(req, res) {
  const id = req.params.id;
  const getOneUser = await getUserById(id);
  if (!getOneUser) {
    return res.status(400).json("not find user");
  }
  return res.status(200).json(getOneUser);
}

async function deleteUserController(req, res) {
  const id = req.params.id;
  const deleteOneUser = await deleteUserById(id);
  if (!deleteOneUser) {
    return res.status(400).json("not find user");
  }
  return res.status(200).json(deleteOneUser);
}

export { getUserController, getUserByIdController, deleteUserController };

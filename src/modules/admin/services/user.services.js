import User from "../../auth/Model/auth.model.js";

async function getuser() {
  const getUsers = await User.find();
  if (!getUsers) {
    return null;
  }
  return getUsers;
}

async function getUserById(id) {
  const findId = await User.findById(id);
  if (!findId) {
    return null;
  }
  return findId;
}

async function deleteUserById(id) {
  const deletId = await User.findByIdAndDelete(id);
  if (!deletId) {
    return null;
  }
  return deletId;
}

export { getuser, getUserById, deleteUserById };

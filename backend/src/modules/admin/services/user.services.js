import User from "../../auth/Model/auth.model.js";

async function getuser(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const getUsers = await User.find().skip(skip).limit(limit);

  const totalUser = await User.countDocuments();

  return {
    data: getUsers,
    currentPage: page,
    totalUser: totalUser,
    totalPages: Math.ceil(totalUser / limit),
  };
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

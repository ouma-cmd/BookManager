import bcrypt from "bcryptjs";

const hashPassword = async (password) => {
  const hashpass = await bcrypt.hash(password, 10);
  return hashpass;
};
export default hashPassword;

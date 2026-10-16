import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Model/auth.model.js";
import hashPassword from "../utils/hashpassword.js";

async function registerservices(name, email, password, role) {
  const findemail = await User.findOne({ email });
  const findName = await User.findOne({ name });

  if (findemail || findName) {
    return null;
  }
  const hashPassworde = await hashPassword(password);

  const userCreate = await User.create({
    name,
    email,
    password: hashPassworde,
    role,
  });
  console.log(userCreate);

  return userCreate;
}

async function loginServices(email, password) {
  const findemail = await User.findOne({ email });
  if (!findemail) {
    return null;
  }
  const comparepassword = await bcrypt.compare(password, findemail.password);
  if (comparepassword) {
    const payload = { id: findemail._id, role: findemail.role };
    const secret = process.env.JWT_SECRET;
    const option = { expiresIn: "1d" };
    const token = jwt.sign(payload, secret, option);
    return {
      token,
      id: findemail._id,
      name: findemail.name,
      role: findemail.role,
    };
  }
  return null;
}

export default { registerservices, loginServices };

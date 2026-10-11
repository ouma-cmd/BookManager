import auth from "../service/auth.services.js";
const { registerservices, loginServices } = auth;

async function registerController(req, res) {
  const { name, email, password, role } = req.body;

  const registerservice = await auth.registerservices(
    name,
    email,
    password,
    role,
  );

  if (!registerservice) {
    return res.status(400).json("incorrect");
  }
  return res.status(200).json(registerservice);
}

async function loginController(req, res) {
  const { email, password } = req.body;

  const login = await auth.loginServices(email, password);

  if (!login) {
    return res.status(400).json("incorrect");
  }
  return res.status(200).json(login);
}

export default { registerController, loginController };

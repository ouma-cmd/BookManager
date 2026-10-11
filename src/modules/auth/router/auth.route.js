import express from "express";
import authController from "../controllers/auth.controller.js";
import valideSchema from "../middleware/valide.schema.js";
import { validateRegister, valideLogin } from "../validate/auth.validate.js";

const { loginController, registerController } = authController;

const route = express.Router();

route.post("/register", valideSchema(validateRegister), registerController);
route.get("/login", valideSchema(valideLogin), loginController);

export default route;

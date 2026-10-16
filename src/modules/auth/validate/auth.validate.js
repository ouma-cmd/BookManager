import joi from "joi";

const validateRegister = joi.object({
  name: joi.string().required(),
  email: joi.string().required().email(),
  password: joi.string().required().min(4).max(20),
  role: joi.string()
  .valid("admin", "user"),
});

const valideLogin = joi.object({
  email: joi.string().required(),
  password: joi.string().required().min(4).max(20),
});

export { validateRegister, valideLogin };

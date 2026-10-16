export default function valideSchema(schema) {
  return (req, res, next) => {
    try {
      schema.validate(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        message: "validate error",
      });
    }
  };
}

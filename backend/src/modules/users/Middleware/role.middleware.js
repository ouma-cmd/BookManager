function roleMiddleware(req, res, next) {
  const role = req.user.role;
  if (role != "user") {
    return res.status(500).json("incorrect");
  }
  next();
}
export default roleMiddleware;

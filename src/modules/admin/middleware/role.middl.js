function roleMiddl(req, res, next) {
  const role = req.user.role;

  if (role !== "admin") {
    return null;
  }
  next();
}
export default roleMiddl;

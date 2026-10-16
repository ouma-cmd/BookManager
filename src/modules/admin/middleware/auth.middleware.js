import jwt from "jsonwebtoken";

function authMiddl(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(404).json("not fond token");
  }
  const token = auth.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json(err);
    }
    req.user = decoded;
    next();
  });
}
export default authMiddl;

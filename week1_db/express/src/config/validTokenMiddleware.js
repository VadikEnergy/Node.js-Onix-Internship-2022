const jwt = require('jsonwebtoken');
const JWT_SECRET = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9ReyJ1c2VyTmFtZSI6IkdpcmwxIiwiaWF0IjoxNjY5MjA4ODIxLCJleHAiOjE2NjkyMTA2MjF9VIXKFxoo7KUrYghoithAjUK0hW0Zi9VdxYhFSnXwF9F4";


const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
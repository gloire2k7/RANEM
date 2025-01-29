const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from header
  if (!token) return res.status(401).send('Access Denied');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid Token');
    req.user = user;
    next();
  });
};


module.exports = adminAuth;

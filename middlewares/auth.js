const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }
  try {
    const decoded = jwt.verify(token, 'Chelsea2021');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
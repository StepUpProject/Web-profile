const jwt = require('jsonwebtoken');
const User = require('../models/user');

const isAuthorization = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, 'StepUp Projects');
    req.user = decoded;
    const user = await User.findById(req.user.id);
    if(!user) {
      return res.status(401).json({ error : "Unauthorized" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ error : error.message });
  }
};

module.exports = isAuthorization;

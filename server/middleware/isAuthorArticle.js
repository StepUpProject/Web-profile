const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Artikel = require('../models/artikel');

const isAuthorArticle = async (req, res, next) => {
  const { id } = req.params;
  let currentArticle = await Artikel.findById(id);

  if(!currentArticle.author.equals(req.user.id)){
    return res.status(401).json({message: 'Unauthorized'});
  }
  next();
};

module.exports = isAuthorArticle;

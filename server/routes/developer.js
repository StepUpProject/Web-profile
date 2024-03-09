const express = require("express");
const router = express.Router();
// const passport = require('passport');
// const AuthController = require('../controllers/auth');
const wrapAsync = require("../utils/wrapAsync");
const isAuth = require("../middleware/isAuth");

router.get(
  "/berandaDev",
  isAuth,
  wrapAsync((req, res) => {
    // res.render('developer', { user: req.user });
  })
);

router.post(
  "/article",
  wrapAsync((req, res) => {
    const data = req.body;
    res.status(200).json({
      data,
      message: "Data received successfully",
    });
    console.log(data);
  })
);

module.exports = router;

const express = require("express");
const router = express.Router();
// const passport = require('passport');
// const AuthController = require('../controllers/auth');
const wrapAsync = require("../utils/wrapAsync");
const isAuth = require("../middleware/isAuth");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./assets/article",
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});
const image = multer({ storage });

router.post(
  "/article",
  image.single("image"),
  wrapAsync((req, res) => {
    const { title, content, published_at } = req.body;
    // const image = req.file.originalname;
    res.status(200).json({
      data: {
        title: title,
        content: content,
        published_at: published_at,
        image: image,
        message: "Data received successfully",
      },
    });
    // console.log(data);
  })
);

module.exports = router;

const express = require("express");
const router = express.Router();
// const passport = require('passport');
// const AuthController = require('../controllers/auth');
const wrapAsync = require("../utils/wrapAsync");
const isAuth = require("../middleware/isAuth");
const multer = require('multer')
const storage = multer.diskStorage({destination:'./assets/article', filename: (req, file, cb) =>{
  console.log(file)
  cb(null, file.originalname)
}})
const image = multer({storage})
router.get(
  "/berandaDev",
  isAuth,
  wrapAsync((req, res) => {
    // res.render('developer', { user: req.user });
  })
);

router.post(
  "/article", image.single('image'),
  wrapAsync((req, res) => {
    console.log(req.file)
    const data = req.body;
    data.image = req.file.originalname
    res.status(200).json({
      data,
      message: "Data received successfully",
    });
    console.log(data);
  })
);

module.exports = router;

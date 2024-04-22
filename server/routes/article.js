const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const Article = require("../models/artikel");
const isAuthorization = require("../middleware/isAuthorization");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets/article");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const image = multer({ storage });

router.put("/article/:id", image.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, published_at } = req.body;
    const article = await Article.findById(id);

    // delete the previous image
    const filePath = path.join(
      __dirname,
      "..",
      "assets/article",
      article.image
    );
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    // set it to the new image
    const image = req.file.filename;

    article.title = title;
    article.content = content;
    article.published_at = published_at;
    article.image = image;
    await article.save();
    return res.status(200).json({
      article: article,
      message: "Data updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/article", image.single("image"), isAuthorization , async (req, res) => {
    try {
      const { title, content, published_at } = req.body;
      const image = req.file.filename;

      const newArticle = new Article({
        title: title,
        published_at: published_at,
        image: image,
        content: content,
        author: userId,
      });
      await newArticle.save();
      return res.status(200).json({
        data: {
          newArticle,
          message: "Data received successfully",
        },
      });
    } catch (error) {
      return res.status(200).json({ message: "Article failed to create" });
    }
});

router.get("/article", async (req, res) => {
  try {
    const articles = await Article.find();
    return res.status(200).json({
      articles: articles,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/article/latest", async (req, res) => {
  try {
    const articles = await Article.find().sort({ published_at: -1 }).limit(1);
    return res.status(200).json({
      articles: articles,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/article/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    const imageName = article.image;
    article.image = `http://localhost:3000/article/${article.image}`;
    return res.status(200).json({
      article,
      imageName,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/article/:id/image", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);

    if (!article || !article.image) {
      return res.status(404).json({
        message: "Article not found or no image available",
      });
    }
    const filePath = path.join(
      __dirname,
      "..",
      "assets",
      "article",
      article.image
    );

    res.sendFile(path.resolve(filePath));
  } catch (error) {
    console.log(error);
  }
});

router.delete("/article/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    const filePath = path.join(
      __dirname,
      "..",
      "assets/article",
      article.image
    );
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    await article.deleteOne();
    return res.status(200).json({
      article: article,
      message: "Data deleted successfully",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

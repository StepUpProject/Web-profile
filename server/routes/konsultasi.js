const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const Konsul = require("../models/konsultasi");


router.get("/", async (req, res) => {
    try {
      const konsul = await Konsul.find();
      res.status(200).json(konsul);
    } catch (error) {
      res.status(401).send(error);
    }
  });
router.post("/", async (req, res) => {
    try {
      const { name, email, question } = await req.body;
      const newkonsul = new Konsul({
        name,
        email,
        question,
      });
      // Save to MongoDB
      await newkonsul.save();
  
      res.status(201).json({ success: true, message: "Konsultasi Berhasil" });
    } catch (error) {
      res.status(401).json({ success: false, message: "Konsultasi Gagal, Mohon coba lagi" });
    }
  });

  module.exports = router
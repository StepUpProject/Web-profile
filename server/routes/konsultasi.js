const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const Konsul = require("../models/konsultasi");


router.get("/", async (req, res) => {
    try {
      const konsul = await Konsul.find();
      res.status(200).json(konsul);
    } catch (error) {
      res.status(500).send(error);
    }
  });
router.post("/", async (req, res) => {
    try {
      const { name, email, question } = await req.body;
      // Create a new Konsultasi instance
      const newkonsul = new Konsul({
        name,
        email,
        question,
      });
      // Save to MongoDB
      await newkonsul.save();
  
      res.status(201).json({ success: true, message: "Konsultasi Berhasil" });
      console.log(newkonsul);
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Konsultasi Gagal, Mohon coba lagi" });
    }
  });

  module.exports = router
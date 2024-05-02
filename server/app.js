const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

//connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1/stepup")
  .then((result) => {
    console.log("connection to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
  origin: "http://localhost:5173",
  credentials: true,
})
);
  
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static("assets"));


// route
app.use("/", require("./routes/auth"));
app.use("/", require("./routes/article"));
app.use("/api/konsultasi", require("./routes/konsultasi"));

app.listen(3000, () => {
  console.log("server is listening on http://localhost:3000");
});

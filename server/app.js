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

  // const baseUrL = "http://localhost:5173"
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
// app.use(flash());

// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   next();
// });

app.get("/", (req, res) => {
  console.log("Berhasil");
});

app.use("/", require("./routes/auth"));
// app.use('/developer',require('./routes/developer'))
app.use("/", require("./routes/article"));
app.use("/api/konsultasi", require("./routes/konsultasi"));

// app.get("/api/teams", (req, res) => {
//   res.json(teams);
// });

// app.get("/api/portfolio", (req, res) => {
//   res.json(portfolios);
// });

app.listen(3000, () => {
  console.log("server is listening on http://localhost:3000");
});

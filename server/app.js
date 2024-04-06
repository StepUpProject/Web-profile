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

const teams = [
  {
    id: 1,
    image: "../images/team-ikhsan.jpg",
    name: "Al Ikhsan Akbar Fatahillah",
    role: "Project Manager",
    email: "ikhsanngkalu@gmail.com",
  },
  {
    id: "65ebeefdb9f8ec01da0e9395",
    image: "../images/team-ikhlas.jpg",
    name: "Muhammad Abdanul Ikhlas",
    role: "Frontend Developer",
    email: "muhabdanulikhlas@gmail.com",
  },
  {
    id: 3,
    image: "../images/team-yoga.jpeg",
    name: "Yoga Agatha Pasaribu",
    role: "Fullstack Developer",
    email: "yogapasaribu@gmail.com",
  },
  {
    id: 4,
    image: "../images/team-riyadhi.jpg",
    name: "Muhammad Riyadhi",
    role: "Backend Developer",
    email: "riyadhi@gmail.com",
  },
  {
    id: 5,
    image: "../images/team-hadi.jpg",
    name: "Hadi Hasan Lubis",
    role: "UI/UX Designer",
    email: "hadihasan@gmail.com",
  },
  {
    id: 6,
    image: "../images/team-adit.png",
    name: "Muh Aditya Dwijaya",
    role: "Creative",
    email: "adityadwijaya@gmail.com",
  },
];
const portfolios = [
  {
    id: 1,
    imageCard: "./images/portfolio-card-1.png",
    mockupLaptop: "../images/portfolio-detail-laptop.png",
    mockupHP: "../images/portfolio-detail-hp.png",
    title: "Website Arsitek Rumah",
    subtitle: "Bank Central Indonesia",
    backgroundColor: "bg-[#D7F0FF]",
    description:
      "Terinspirasi oleh estetika dan fungsionalitas, portofolio arsitektur kami mencerminkan keahlian dalam merancang rumah impian",
    descriptionDetail:
      "Terinspirasi oleh estetika dan fungsionalitas, portofolio arsitektur kami mencerminkan keahlian dalam merancang rumah impian. Setiap proyek kami adalah perwujudan kreativitas dan keunggulan teknis, menghasilkan ruang yang tidak hanya memukau secara visual tetapi juga memenuhi kebutuhan fungsional sehari-hari. Dari desain eksterior yang elegan hingga tata letak interior yang cerdas, setiap detail dipikirkan dengan seksama. Jelajahi portofolio kami untuk menemukan harmoni antara keindahan dan fungsionalitas dalam setiap proyek arsitektur kami.",
    teknologi: [
      {
        title: "react",
        image: "../images/react.png",
      },
      {
        title: "mysql",
        image: "../images/mysql.png",
      },
      {
        title: "nodejs",
        image: "../images/nodejs.png",
      },
      {
        title: "expressjs",
        image: "../images/expressjs.png",
      },
    ],
  },
  {
    id: 2,
    imageCard: "./images/portfolio-card-2.png",
    mockupLaptop: "../images/portfolio-detail-laptop.png",
    mockupHP: "../images/portfolio-detail-hp.png",
    title: "Website Catering",
    subtitle: "Warung Makan Kokoh",
    backgroundColor: "bg-[#D7FFEE]",
    description:
      "Terinspirasi oleh estetika dan fungsionalitas, portofolio arsitektur kami mencerminkan keahlian dalam merancang rumah impian",
    descriptionDetail:
      "Terinspirasi oleh estetika dan fungsionalitas, portofolio arsitektur kami mencerminkan keahlian dalam merancang rumah impian. Setiap proyek kami adalah perwujudan kreativitas dan keunggulan teknis, menghasilkan ruang yang tidak hanya memukau secara visual tetapi juga memenuhi kebutuhan fungsional sehari-hari. Dari desain eksterior yang elegan hingga tata letak interior yang cerdas, setiap detail dipikirkan dengan seksama. Jelajahi portofolio kami untuk menemukan harmoni antara keindahan dan fungsionalitas dalam setiap proyek arsitektur kami.",
    teknologi: [
      {
        title: "react",
        image: "../images/react.png",
      },
      {
        title: "mysql",
        image: "../images/mysql.png",
      },
      {
        title: "nodejs",
        image: "../images/nodejs.png",
      },
      {
        title: "expressjs",
        image: "../images/expressjs.png",
      },
    ],
  },
];

app.use(bodyParser.json());
// const baseUrL = "http://localhost:5173"
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

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

app.get("/api/teams", (req, res) => {
  res.json(teams);
});

app.get("/api/portfolio", (req, res) => {
  res.json(portfolios);
});

app.listen(3000, () => {
  console.log("server is listening on http://localhost:3000");
});

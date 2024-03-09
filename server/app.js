const express = require("express");
const app = express();
const session = require('express-session')
const flash = require('connect-flash')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('./models/user')

//connect to mongodb
mongoose
  .connect("mongodb://127.0.0.1/stepup_db")
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
  },
  {
    id: 2,
    image: "../images/team-ikhlas.jpg",
    name: "Muhammad Abdanul Ikhlas",
    role: "Frontend Developer",
  },
  {
    id: 3,
    image: "../images/team-yoga.jpeg",
    name: "Yoga Agatha Pasaribu",
    role: "Fullstack Developer",
  },
  {
    id: 4,
    image: "../images/team-riyadhi.jpg",
    name: "Muhammad Riyadhi",
    role: "Backend Developer",
  },
  {
    id: 5,
    image: "../images/team-hadi.jpg",
    name: "Hadi Hasan Lubis",
    role: "UI/UX Designer",
  },
  {
    id: 6,
    image: "../images/team-hadi.jpg",
    name: "Muh Aditya Dwijaya",
    role: "Creative",
  },
];
const portfolios = [
  {
    id: 1,
    imageCard: "./images/portfolio-card-1.png",
    mockup: "../images/portfolio-detail-1.png",
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
    mockup: "../images/portfolio-detail-2.png",
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

app.use(bodyParser.json())
// const baseUrL = "http://localhost:5173"
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'stepup',
  resave: false,
  saveUninitialized: false,
  cookie: {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
      expires: Date.now() + 60 * 60 * 1000,
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});


app.get("/", (req, res) => {
  console.log("Berhasil");
});

app.use('/',require('./routes/auth')) 
app.use('/developer',require('./routes/developer')) 
app.use('/api/konsultasi',require('./routes/konsultasi')) 

app.get('/api/teams', (req, res) => {
  res.json(teams)
})

app.get("/api/portfolio", (req, res) => {
  res.json(portfolios);
});

// app.get('/berandaDev', (req, res) => {
//   return res.redirect('http://localhost:5173/berandaDev')
// })




app.post("/login_dev", async (req, res) => {
  try {
    const check = await Users.findOne({ name: req.body.name });

    if ((check.password = req.body.password)) {
      res.render("..");
    } else {
      res.send("Password yang anda masukkan Salah !!!");
    }
  } catch {
    res.send("Detail kesalahan");
  }
});

app.listen(3000, () => {
  console.log("server is listening on http://localhost:3000");
});

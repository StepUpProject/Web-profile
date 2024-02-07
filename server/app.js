const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

const teams = [
    {
      id: 1,
      image: "./images/team-ikhsan.jpg",
      name: "Al Ikhsan Akbar Fatahillah",
      role: "Project Manager",
    },
    {
      id: 2,
      image: "./images/team-ikhlas.jpg",
      name: "Muhammad Abdanul Ikhlas",
      role: "Frontend Developer",
    },
    {
      id: 3,
      image: "./images/team-yoga.jpeg",
      name: "Yoga Agatha Pasaribu",
      role: "Fullstack Developer",
    },
    {
      id: 4,
      image: "./images/team-riyadhi.jpg",
      name: "Muhammad Riyadhi",
      role: "Backend Developer",
    },
    {
      id: 5,
      image: "./images/team-hadi.jpg",
      name: "Hadi Hasan Lubis",
      role: "UI/UX Designer",
    },
    {
      id: 6,
      image: "./images/team-hadi.jpg",
      name: "Muh Aditya Dwijaya",
      role: "Creative",
    },
]

app.use(bodyParser.json())
const baseUrL = "http://localhost:5173"
app.use(cors({
        origin : `${baseUrL}`,
    }))

app.get('/',(req,res) =>{
 console.log('Berhasil')
})

app.get('/api/teams',(req,res) =>{
    res.json(teams)
})
app.post('/api/konsultasi',async (req,res) =>{
    const data = await req.body
    res.status(200).json({ data, message: 'Data received successfully' });
    console.log(data)
})

app.listen(3000,()=>{
    console.log('server is listening on http://localhost:3000')
})

const mongoose = require('mongoose') // import mongoose
//Lokasi untuk product
const Users = require('../models/user')
//connect to mongodb
mongoose.connect('mongodb://127.0.0.1/stepup_db').then((result)=>{
    console.log('connection to mongodb')
}).catch((err)=>{
    console.log(err)
})
async function seedUsers(){
    const users = [
        {
            "name"      : "Al Ikhsan Akbar Fatahillah",
            "password"  : "stepupcode",
            "email"     : "ikhsanngkalu@gmail.com"
        },
        {
            "name"      : "Muhammad Abdanul Ikhlas",
            "password"  : "stepupcode",
            "email"     : "muhabdanulikhlas0983@gmail.com"
        },
        {
            "name"      : "Yoga Agatha Pasaribu",
            "password"  : "Lael0laeq12",
            "email"     : "yogapasaribu000@gmail.com"
        },
        {
            "name"      : "Muhammad Riyadhi",
            "password"  : "stepupcode",
            "email"     : "mriyadhi914@gmail.com"
        },
        {
            "name"      : "Hadi Hasan Lubis",
            "password"  : "Hadi29hasan",
            "email"     : "hadihasan047@gmail.com"
        },
        {
            "name"      : "MUH ADITYA DWIJAYA",
            "password"  : "stepupcode",
            "email"     : "dwi.aditya2603@gmail.com"
        }
    ]
    try {
       await Users.insertMany(users)
        console.log(Users)
    } catch (error) {
        console.log(error)
    } finally{
        mongoose.disconnect()
    }
   
}
 seedUsers()

const User = require('../models/user')
const mongoose = require('mongoose');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

mongoose.connect('mongodb://127.0.0.1/stepup')
    .then((result) => {
        console.log('connected to mongodb')
        // console.log(result)
    }).catch((err) => {
        console.log(err)
    });

passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
async function seedUser() {
    const users = [
        {
            name: 'Yoga Agatha Pasaribu',
            email: 'yogapsb000@gmail.com',
            password: 'lael0laeq12',
            // role: 'admin'
        },
        {
            name: 'Yoga Pasaribu',
            email: 'yogapsb000@gmail.com',
            password: 'lael0laeq12',
            // role: 'admin'
        },
        {
            name: 'Al Ikhsan Akbar Fatahillah',
            email: 'alikhsan@gmail.com',
            password: 'ikhsan21',
            // role: 'admin'
        }
    ]
    try {
        await User.deleteMany({});
        await User.insertMany(users);
        console.log('Data berhasil disimpan');
    } catch (err) {
        console.log('Terjadi kesalahan saat menyimpan data:', err);
    } finally {
        mongoose.disconnect();
    }
}

seedUser();
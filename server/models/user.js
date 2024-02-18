const mongoose = require('mongoose');

//Membuat Scema untuk menentukan apa saja yang akan diperlukan pada data yang akan dibuat(nama dan tipe data)
const userSchema = new mongoose.Schema({
    name : String,
    password : String,
    email : String
})

const Users = mongoose.model('Users',userSchema)
module.exports = Users 


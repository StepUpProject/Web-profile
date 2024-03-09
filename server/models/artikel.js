const mongoose = require('mongoose')

const artikleSchema = new mongoose.Schema({
    Judul : String,
    isi : String,
    contact : Number
})

module.exports = mongoose.model('Artikel',artikleSchema)
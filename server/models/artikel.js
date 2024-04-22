const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artikelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    published_at: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref : 'User',
    }
})

module.exports = mongoose.model('Artikel', artikelSchema)

const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    name: String,
    type: String,
    dimension: String
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location
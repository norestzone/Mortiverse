const mongoose = require('../db/connection')

const characterSchema = new mongoose.Schema({
    name: String,
    species: String,
    status: String,
    image: String,
    episodes: Array,
    origin: Object
})

const Character = mongoose.model('Character', characterSchema)
module.exports = Character
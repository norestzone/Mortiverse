const mongoose = require('../db/connection')

const episodeSchema = new mongoose.Schema({
    name: String,
    episode: String,
    date: String,
    characters: Array,
    synopsis: String
})

const Episode = mongoose.model('Episode', episodeSchema)

module.exports = Episode
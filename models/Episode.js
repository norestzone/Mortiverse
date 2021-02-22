const mongoose = require('../db/connection')

const episodeSchema = new mongoose.Schema({
    name: String,
    episode: String,
    date: String,
    synopsis: String,
    link: String
})

const Episode = mongoose.model('Episode', episodeSchema)

module.exports = Episode
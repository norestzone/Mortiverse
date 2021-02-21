const mongoose = require('mongoose')

const episodeSchema = new mongoose.Schema({
    name: String,
    episode: String,
    date: String,
    synopsis: String
})

const Episode = mongoose.model('Episode', episodeSchema)

module.exports = Episode
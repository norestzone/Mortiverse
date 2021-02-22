const mongoose = require('../db/connection')

const episodeSchema = new mongoose.Schema({
    name: String,
    episode: String,
    date: String,
<<<<<<< HEAD
    synopsis: String,
    link: String
=======
    characters: Array,
    synopsis: String
>>>>>>> 34d383ff3359242a5d13c50ab5c47fa45d29a98a
})

const Episode = mongoose.model('Episode', episodeSchema)

module.exports = Episode
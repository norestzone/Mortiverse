const express = require('express')
const router = express.Router()
const Character = require('../models/Character')
const Episode = require('../models/Episode')
const Location = require('../models/Location')

require('dotenv').config()

router.get('/characters', (req, res) => {
    Character.find({})
    .then(characterData => res.send(characterData)
)})

router.get('/episodes', (req, res) => {
    Episode.find({})
    .then(episodeData => res.send(episodeData)
)})

router.get('/locations', (req, res) => {
    Location.find({})
    .then(locationData => res.send(locationData)
)})

module.exports = router
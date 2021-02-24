const express = require('express')
const router = express.Router()
const ConspiracyTheory = require('../models/ConspiracyTheory')

router.get('/theory', (req, res) => {
    ConspiracyTheory.find({})
    .then(theoryData => res.send(theoryData)
)})

module.exports = router
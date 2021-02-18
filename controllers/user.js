const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { createUserToken, requireToken } = require('../middleware/auth')
const passport = require('passport')

router.post('/login', (req, res) => {
  User.findOne({email: req.body.email})
  .then(foundUser => createUserToken(req, foundUser))
  .then(token => res.json({token}))
  .catch(err => console.log('Error Logging In: ', err))
})
router.post('/signup', (req, res) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => ({
    email: req.body.email,
    password: hash,
    motto: req.body.motto 
  }))
  .then(hashedUser => User.create(hashedUser))
  .then(createdUser => createUserToken(req, createdUser))
  .then(token => res.status(201).json({token}))
  .catch(err => console.log(`Error creating User ${err}`))
})

// Example of how to protect a route with 
// PRIVATE
// GET /api/private
router.get('/private', requireToken, (req, res) => {
  console.log(req.user)
  return res.json({'message': 'thou hath been granted permission to access this route.'})
})
router.get('/random', (req, res) => {
  console.log(req.user)
  return res.json({'message': 'thou hath been granted permission to access this route.'})
})

module.exports = router
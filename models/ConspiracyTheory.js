const mongoose = require('../db/connection')


const commentSchema = new mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body: String
})

const conspiracySchema = new mongoose.Schema({
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
  body: String,
  comments: [commentSchema]
})

module.exports = mongoose.model('ConspiracyTheory', conspiracySchema)
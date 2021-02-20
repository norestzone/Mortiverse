const mongoose = require('../db/connection')

const options = {
  timestamps: true,
  toJSON: {
    virtuals: true//,
    // transform: (_doc, userDocToReturn) => {
    //   delete userDocToReturn.password
    //   return userDocToReturn
    // }
  }
}

const commentSchema = new.mongoose.Schema({
  userName: {
    type: mongoose.Schema.Types.userName,
    ref: 'User'
  }, 
  theory: {
    type: Text,
    required: true,
    minlength: 2,
    maxlength: 500
  }, 
  conspiracyTheory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ConspiracyTheory'
  }
}, options)

module.exports = mongoose.model('Comment', commentSchema)
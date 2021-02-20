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

const conspiracySchema = new.mongoose.Schema({
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
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }
}, options)

module.exports = mongoose.model('ConspiracyTheory', conspiracySchema)
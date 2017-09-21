const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Setting up the schema of the db
const userSchema = new Schema({
  name: {
    type: String
  }
})

module.exports = mongoose.model('UserModel', userSchema)

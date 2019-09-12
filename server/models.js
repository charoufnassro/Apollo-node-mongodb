const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: String,
  email: String,
  sexe: String
});

const User = mongoose.model('user', userSchema); 

module.exports = {
  User
};
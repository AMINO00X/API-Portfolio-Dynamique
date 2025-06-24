const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: { type: String, required: true },
  status: { type: String },
  phone: { type: String },
  email: { type: String, required: true, unique: true },
  githubLink: { type: String },
  linkedinLink: { type: String }
});

module.exports = mongoose.model('User', userSchema);    
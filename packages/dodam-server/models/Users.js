const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  birth: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('users', UserSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
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
    validate: {
      validator: function (v) {
        return /\d{3}\d{4}\d{4}/.test(v);
      },
    },
    required: [true, 'User phone number required'],
  },
  likes_of_club: {
    type: Schema.Types.ObjectId,
    ref: 'club',
  }
});
module.exports = mongoose.model('user', UserSchema);

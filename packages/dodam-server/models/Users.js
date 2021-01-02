const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Birth: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}\d{4}\d{4}/.test(v);
      },
    },
    required: [true, 'User phone number required'],
  },
  LikesOfClub: {
    type: Schema.Types.ObjectId,
    ref: 'club',
  }
});
module.exports = mongoose.model('user', UserSchema);

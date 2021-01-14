const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  recruitStartDate: {
    type: Date,
  },
  recruitEndDate: {
    type: Date,
  },
  representContent: {
    type: String,
  },
  introduceContent: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
  representativeImage: {
    type: String,
  },
  logoImage: {
    type: String,
  },
});
module.exports = mongoose.model('club', ClubSchema);

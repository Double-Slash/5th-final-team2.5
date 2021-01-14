const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  clubId: {
    type: Schema.Types.ObjectId,
    ref: 'club',
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  commentTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('comment', CommentSchema);

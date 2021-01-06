const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref:'user'
  },
  clubId: {
    type: Schema.Types.ObjectId,
    ref: 'club',
    required: true,
  },
  commentId: {
    type: Schema.Types.ObjectId,
    ref: 'comment',
    required: true,
  },
  reply: {
    type: String, 
    required: true,
  },
  replyTime: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('reply', ReplySchema);

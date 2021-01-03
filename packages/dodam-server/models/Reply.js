const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const ReplySchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique: true,
  },
  name: {
    type: String,
    required: true,
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

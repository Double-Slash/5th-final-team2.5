const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentaireSchema = new Schema({
  commentaire: [
    {
      type: String,
    }
  ]
})

const ClubSchema = new Schema({
  writer: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
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
  recruit_start_date: {
    type: String,
  },
  recruit_end_date: {
    type: String,
  },
  represent_content: {
    type: String,
  },
  introduce_content: {
    type: String,
  },
  comment: [
    CommentaireSchema
  ],
  likes: {
    type: Number,
  },
  register_date: {
    type: Date,
    default: Date.now(),
  },
  url: {
    representative_image: {type: mongoose.SchemaTypes.Url},
    logo_image: {type: mongoose.SchemaTypes.Url}, 
  }
});
module.exports = mongoose.model('club', UserSchema);

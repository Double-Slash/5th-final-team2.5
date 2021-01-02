const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoose = require('mongoose');
require('mongoose-type-url');

const CommentaireSchema = new Schema({
  Commentaire: [
    {
      type: String,
    }
  ]
})

const ClubSchema = new Schema({
  Writer: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  School: {
    type: String,
    required: true,
  },
  Field: {
    type: String,
    required: true,
  },
  Area: {
    type: String,
    required: true,
  },
  Size: {
    type: Number,
    required: true,
  },
  RecruitStartDate: {
    type: Date,
  },
  RecruitEndDate: {
    type: Date,
  },
  RepresentContent: {
    type: String,
  },
  IntroduceContent: {
    type: String,
  },
  Comments: [
    CommentaireSchema
  ],
  Likes: {
    type: Number,
    default: 0,
  },
  RegisterDate: {
    type: Date,
    default: Date.now(),
  },
  Url: {
    RepresentativeImage: {type: mongoose.SchemaTypes.Url},
    LogoImage: {type: mongoose.SchemaTypes.Url}, 
  }
});
module.exports = mongoose.model('club', ClubSchema);

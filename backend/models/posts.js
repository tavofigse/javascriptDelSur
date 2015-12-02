"use strict";
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var postSchema = new Schema({
  title:  { type: String },
  subject:{ type: String },
  body:   { type: String },
  date: { type: Date, default: Date.now },
  comments: [{ body: String, date: Date }],
  meta: {
    votes: Number,
    favs:  Number
  }
});

module.exports = mongoose.model('Posts', postSchema);

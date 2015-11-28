"use strict";
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var postSchema = new Schema({
  title:  { type: String },
  subject:{ type: String },
  body:   { type: String }
});

module.exports = mongoose.model('Posts', postSchema);

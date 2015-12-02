"use strict";
let express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    models = require('./models/posts');

mongoose.connect('mongodb://localhost/posts', ((err, res) => {
  if(err) console.log('ERROR: connecting to Database. ' + err);
}));

// app.use(models);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());

require('./routers')(express, app);

app.listen(3000, (() => {
  console.log("Node server running on http://localhost:3000");
}));

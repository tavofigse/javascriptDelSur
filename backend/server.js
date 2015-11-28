"use strict";
let express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

require('./routers')(express, app);

mongoose.connect('mongodb://localhost/posts', function(err, res) {
  if(err) console.log('ERROR: connecting to Database. ' + err);

  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});

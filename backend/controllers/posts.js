"use strict";
let mongoose  = require('mongoose'),
    PostsModel     = require('../models/posts');

//GET - Return all Posts in the DB
exports.findAll = ((req, res) => {
    PostsModel.find((err, posts) => {
      if(err) res.send(500, err.message);

      console.log(`GET /posts`);
      res.status(200).jsonp(posts);
    });
});

//GET - Return Post
exports.findById = ((req, res) => {
    PostsModel.findById(req.params.id, ((err, post) => {
      if(err) return res.send(500, err.message);

      console.log(`GET /posts/${req.params.id}`);
      res.status(200).jsonp(post);
    }));
});


//POST - add new Document Post
exports.add = ((req, res) => {

  let post = new PostsModel({
    title:  req.body.title,
    body:   req.body.body
  });

  PostsModel.save(function (err, post) {
    if(err) res.send(500, err.message);

    res.send(200).jsonp(post);
  })
});

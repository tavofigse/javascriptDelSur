"use strict";
let mongoose    = require('mongoose'),
    PostsModel  = mongoose.model('Posts');

let sendError = ((code, err) => {
  if(err) return res.status(code).send(err.message);
});

//GET - Return all Posts in the DB
exports.findAll = ((req, res) => {
    PostsModel.find((err, posts) => {
      sendError(500, err);

      console.log(`GET /posts`);
      res.status(200).jsonp(posts);
    });
});

//GET - Return Post
exports.findById = ((req, res) => {
    PostsModel.findById(req.params.id, ((err, post) => {
      sendError(500, err);

      console.log(`GET /posts/${req.params.id}`);
      res.status(200).jsonp(post);
    }));
});


//POST - add new Document Post
exports.add = ((req, res) => {
  let post = new PostsModel({
    title:  req.body.title,
    subject:  req.body.subject,
    body:   req.body.body
  });

  console.log(`POST /posts/`);
  console.log(req.body);
  post.save(((err, post) => {
    sendError(500, err);

    res.status(200).jsonp(post);
  }));
});

//PUT - update a Post by Id
exports.update = ((req, res) => {
	PostsModel.findById(req.params.id, ((err, post) => {
    post.title = req.body.title;
    post.subject = req.body.subject;
		post.body = req.body.body;

		post.save(((err) => {
			sendError(500, err);
      res.status(200).jsonp(post);
		}));
	}));
});

//DELETE - Delete a Post with specified ID
exports.delete = ((req, res) => {
	PostsModel.findById(req.params.id, ((err, post) => {
		post.remove(((err) => {
			sendError(500, err);
      res.status(200);
		}));
	}));
});

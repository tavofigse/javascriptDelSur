var Post = require('../models/post');
var express = require('express');
var router = express.Router();


/* GET all the public posts. */
router.get('/', function(req, res) {
    Post.find(function(err, posts) {
    if (err) {
      return res.send(err);
    }

    res.json(posts);
  });
});


/* GET particular post */
router.get('/:id', function(req, res) {
  Post.findOne({ _id: req.params.id}, function(err, post) {
    if (err) {
      return res.send(err);
    }

    res.json(post);
  });
});


/* POST new posts */
router.post('/', function(req, res) {
  var post = new Post(req.body);

  post.save(function(err) {
    if (err) {
      return res.send(err);
    }

    res.send({ message: 'Post Added' });
  });
});

module.exports = router;

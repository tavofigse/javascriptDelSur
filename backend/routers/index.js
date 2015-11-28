"use strict";
let PostsController = require('../controllers/posts');

module.exports = ((express, app) => {

  // API routes
  let posts = express.Router();

  posts.route('/posts')
    .get(PostsController.findAll)
    .post(PostsController.add);

  // posts.route('/posts/:id')
  //   .get(PostsController.findById)
  //   // .put(PostsController.update)
  //   // .delete(PostsController.delete);

  app.use('/api', posts);
});

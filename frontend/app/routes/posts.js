import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function (controller, model){
    controller.set('model', model);
    controller.set('title', `${Ember.ENV.TITLE} All Post`);
  },

  model: function (){
    this.store.find('posts', 1).then(function(post) {

    });

    // return Ember.RSVP.hash({
    //   posts: posts
    // });
  }

});

import $ from 'jquery';
import Backbone from 'backbone';

import Movies from './modules/movies/movies.module';
import Movie from './modules/movie/movie.module';

let Router = Backbone.Router.extend({

  routes: {
    '': 'dashboard',
    'movies/:id': 'movie',
    'about': 'about'
  },

  initialize: () => {
    console.log('router initialized');

    Backbone.history.start();
  },

  dashboard: () => {
    Movies.load().then(function(view) {
      $('.flexi').empty().append(view.render().el);
    });
  },

  movie: (id) => {
    Movie.load(id).then(function(view) {
      $('.flexi').empty().append(view.render().el);
    });
  },

  about: () => {
    console.log('im in the about');
  }

});

const router = new Router();
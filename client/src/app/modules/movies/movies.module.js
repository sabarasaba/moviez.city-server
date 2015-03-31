import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

let ItemView = Marionette.ItemView.extend({

  template: _.template('<a href="#/movies/<%= id %>"> <img src="<%= medium_cover_image %>" alt=""> </a>')

});

let CollectionView = Marionette.CollectionView.extend({
  childView: ItemView
});


export default {
  load: function() {
    let $def = $.Deferred();

    $.getJSON('/api/movies').then(function(data) {
      let collection = new Backbone.Collection(data.movies);

      let view = new CollectionView({
        collection: collection
      });

      $def.resolve(view);
    });

    return $def;
  }
};
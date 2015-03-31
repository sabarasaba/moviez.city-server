import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

let ItemView = Marionette.ItemView.extend({

  template: _.template('<h1> <%= Movie.title_long %> </h1>')

});


export default {
  load: function(id) {
    let $def = $.Deferred();


    $.getJSON('/api/movies/' + id).then(function(data) {

      let view = new ItemView({
        model: new Backbone.Model(data)
      });

      $def.resolve(view);
    });

    return $def;
  }
};
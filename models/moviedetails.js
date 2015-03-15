'use strict';

module.exports = function(sequelize, DataTypes) {
  var MovieDetails = sequelize.define('MovieDetails', {
    description_intro: DataTypes.TEXT,
    description_full: DataTypes.TEXT,
    yt_trailer_code: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        MovieDetails.belongsTo(models.Movie);
        MovieDetails.hasOne(models.MovieArtwork);
        MovieDetails.hasMany(models.Director);
        MovieDetails.hasMany(models.Actor);
      }
    }
  });

  return MovieDetails;
};
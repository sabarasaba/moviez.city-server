'use strict';

module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    _id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    imdb_code: DataTypes.STRING,
    title: {type: DataTypes.STRING, unique: true},
    title_long: DataTypes.STRING,
    year: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    runtime: DataTypes.FLOAT,
    language: DataTypes.STRING,
    mpa_rating: DataTypes.STRING,
    small_cover_image: DataTypes.STRING,
    medium_cover_image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Movie.hasMany(models.Torrent)
      }
    }
  });
  return Movie;
};
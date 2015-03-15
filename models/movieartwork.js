'use strict';

module.exports = function(sequelize, DataTypes) {
  var MovieArtwork = sequelize.define('MovieArtwork', {
    background_image: DataTypes.STRING,
    small_cover_image: DataTypes.STRING,
    medium_cover_image: DataTypes.STRING,
    large_cover_image: DataTypes.STRING,
    medium_screenshot_image1: DataTypes.STRING,
    medium_screenshot_image2: DataTypes.STRING,
    medium_screenshot_image3: DataTypes.STRING,
    large_screenshot_image1: DataTypes.STRING,
    large_screenshot_image2: DataTypes.STRING,
    large_screenshot_image3: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        MovieArtwork.belongsTo(models.MovieDetails);
      }
    }
  });

  return MovieArtwork;
};
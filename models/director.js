'use strict';

module.exports = function(sequelize, DataTypes) {
  var Director = sequelize.define('Director', {
    name: DataTypes.STRING,
    small_image: DataTypes.STRING,
    medium_image: DataTypes.STRING

  }, {
    classMethods: {
      associate: function(models) {
        Director.belongsTo(models.MovieDetails);
      }
    }
  });

  return Director;
};
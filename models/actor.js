'use strict';

module.exports = function(sequelize, DataTypes) {
  var Actor = sequelize.define('Actor', {
    name: DataTypes.STRING,
    character: DataTypes.STRING,
    small_image: DataTypes.STRING,
    medium_image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Actor.belongsTo(models.MovieDetails);
      }
    }
  });

  return Actor;
};
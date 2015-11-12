'use strict';

module.exports = function(sequelize, DataTypes) {
  var Actors = sequelize.define('Actors', {
    name: DataTypes.STRING,
    link: DataTypes.STRING(400),
    picture: DataTypes.STRING(400)
  }, {
    classMethods: {
      associate: function(models) {
        Actors.belongsTo(models.Movie);
      }
    }
  });
  return Actors;
};
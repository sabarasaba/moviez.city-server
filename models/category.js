'use strict';

module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Torrent.belongsTo(models.Movie);
      }
    }
  });
  return Category;
};
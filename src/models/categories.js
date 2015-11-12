'use strict';

module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define('Categories', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Categories.belongsTo(models.Movie);
      }
    }
  });
  return Categories;
};
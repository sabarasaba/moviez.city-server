'use strict';

module.exports = function(sequelize, DataTypes) {
  var Torrent = sequelize.define('Torrent', {
    url: DataTypes.STRING,
    hash: DataTypes.STRING,
    quality: DataTypes.STRING,
    seeds: DataTypes.INTEGER,
    peers: DataTypes.INTEGER,
    size: DataTypes.STRING,
    size_bytes: DataTypes.STRING,
    uploaded: DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        Torrent.belongsTo(models.Movie);
      }
    }
  });
  return Torrent;
};
'use strict';

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('Torrent', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      url: {
        type: DataTypes.STRING
      },
      hash: {
        type: DataTypes.STRING
      },
      quality: {
        type: DataTypes.STRING
      },
      seeds: {
        type: DataTypes.INTEGER
      },
      peers: {
        type: DataTypes.INTEGER
      },
      size: {
        type: DataTypes.STRING
      },
      size_bytes: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('Torrent').done(done);
  }
};
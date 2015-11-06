"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Actors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      character: {
        type: DataTypes.STRING
      },
      small_image: {
        type: DataTypes.STRING
      },
      medium_image: {
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
    migration.dropTable("Actors").done(done);
  }
};
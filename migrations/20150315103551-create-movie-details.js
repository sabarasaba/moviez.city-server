"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("MovieDetails", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      description_intro: {
        type: DataTypes.TEXT
      },
      description_full: {
        type: DataTypes.TEXT
      },
      yt_trailer_code: {
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
    migration.dropTable("MovieDetails").done(done);
  }
};
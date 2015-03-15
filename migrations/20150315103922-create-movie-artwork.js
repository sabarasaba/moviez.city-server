"use strict";

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("MovieArtworks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      background_image: {
        type: DataTypes.STRING
      },
      small_cover_image: {
        type: DataTypes.STRING
      },
      medium_cover_image: {
        type: DataTypes.STRING
      },
      large_cover_image: {
        type: DataTypes.STRING
      },
      medium_screenshot_image1: {
        type: DataTypes.STRING
      },
      medium_screenshot_image2: {
        type: DataTypes.STRING
      },
      medium_screenshot_image3: {
        type: DataTypes.STRING
      },
      large_screenshot_image1: {
        type: DataTypes.STRING
      },
      large_screenshot_image2: {
        type: DataTypes.STRING
      },
      large_screenshot_image3: {
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
    migration.dropTable("MovieArtworks").done(done);
  }
};

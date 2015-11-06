'use strict';

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('Movie', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      _id: {
        type: DataTypes.INTEGER
      },
      url: {
        type: DataTypes.STRING
      },
      imdb_code: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING,
        unique: true
      },
      title_long: {
        type: DataTypes.STRING
      },
      year: {
        type: DataTypes.INTEGER
      },
      rating: {
        type: DataTypes.FLOAT
      },
      runtime: {
        type: DataTypes.FLOAT
      },
      language: {
        type: DataTypes.STRING
      },
      mpa_rating: {
        type: DataTypes.STRING
      },
      small_cover_image: {
        type: DataTypes.STRING
      },
      medium_cover_image: {
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
    migration.dropTable('Movie').done(done);
  }
};
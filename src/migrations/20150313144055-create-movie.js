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
      title: {
        type: DataTypes.STRING(400),
        unique: true
      },
      poster_path: {
        type: DataTypes.STRING
      },
      backdrop_path: {
        type: DataTypes.STRING
      },
      original_language: {
        type: DataTypes.STRING
      },
      release_date: {
        type: DataTypes.STRING
      },
      overview: {
        type: DataTypes.TEXT
      },
      plot: {
        type: DataTypes.TEXT
      },
      rated: {
        type: DataTypes.STRING
      },
      director: {
        type: DataTypes.STRING
      },
      runtime: {
        type: DataTypes.INTEGER
      },
      imdb: {
        type: Sequelize.JSON
      },
      awards: {
        type: Sequelize.JSON
      },
      metacritic: {
        type: DataTypes.INTEGER
      },
      trailer: {
        type: DataTypes.STRING(400)
      },
      download: {
        type: DataTypes.JSON
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
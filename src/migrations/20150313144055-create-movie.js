'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(400),
        unique: true
      },
      slug: {
        type: Sequelize.STRING,
      },
      poster_path: {
        type: Sequelize.STRING
      },
      backdrop_path: {
        type: Sequelize.STRING
      },
      original_language: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATE
      },
      overview: {
        type: Sequelize.TEXT
      },
      plot: {
        type: Sequelize.TEXT
      },
      rated: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      runtime: {
        type: Sequelize.INTEGER
      },
      imdb: {
        type: Sequelize.JSON
      },
      awards: {
        type: Sequelize.JSON
      },
      metacritic: {
        type: Sequelize.INTEGER
      },
      trailer: {
        type: Sequelize.STRING(400)
      },
      download: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Movies');
  }
};
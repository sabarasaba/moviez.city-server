'use strict';

module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Actor", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      link: {
        type: DataTypes.STRING(400)
      },
      picture: {
        type: DataTypes.STRING(400)
      },
      role: {
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
    migration.dropTable("Actor").done(done);
  }
};
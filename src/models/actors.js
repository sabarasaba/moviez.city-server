export default (sequelize, DataTypes) => {
  let Actors = sequelize.define('Actors', {
    name: DataTypes.STRING,
    link: DataTypes.STRING(400),
    picture: DataTypes.STRING(400),
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Actors.belongsTo(models.Movie);
      }
    }
  });

  return Actors;
};
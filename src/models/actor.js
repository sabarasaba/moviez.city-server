export default (sequelize, DataTypes) => {
  let Actor = sequelize.define('Actor', {
    name: DataTypes.STRING,
    link: DataTypes.STRING(400),
    picture: DataTypes.STRING(400),
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Actor.belongsTo(models.Movie);
      }
    }
  });

  return Actor;
};
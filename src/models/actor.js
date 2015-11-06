export default (sequelize, DataTypes) => {
  let Actor = sequelize.define('Actor', {
    name: DataTypes.STRING,
    character: DataTypes.STRING,
    small_image: DataTypes.STRING,
    medium_image: DataTypes.STRING
  }, {
    classMethods: {
      associate: models => {
        Actor.belongsTo(models.MovieDetails);
      }
    }
  });

  return Actor;
};

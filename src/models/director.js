export default (sequelize, DataTypes) => {
  let Director = sequelize.define('Director', {
    name: DataTypes.STRING,
    small_image: DataTypes.STRING,
    medium_image: DataTypes.STRING

  }, {
    classMethods: {
      associate: (models) => {
        Director.belongsTo(models.MovieDetails);
      }
    }
  });

  return Director;
};
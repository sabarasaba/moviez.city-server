export default (sequelize, DataTypes) => {
  let Movie = sequelize.define('Movie', {
    title: {type: DataTypes.STRING(400), unique: true},
    poster_path: DataTypes.STRING,
    backdrop_path: DataTypes.STRING,
    original_language: DataTypes.STRING,
    release_date: DataTypes.DATE,
    overview: DataTypes.TEXT,
    plot: DataTypes.TEXT,
    rated: DataTypes.STRING,
    director: DataTypes.STRING,
    runtime: DataTypes.STRING,
    imdb: DataTypes.JSON,
    awards: DataTypes.JSON,
    metacritic: DataTypes.INTEGER,
    trailer: DataTypes.STRING(400),
    download: DataTypes.JSON
  }, {
    classMethods: {
      associate: (models) => {
        Movie.hasMany(models.Categories);
        Movie.hasMany(models.Actors);
      }
    }
  });

  return Movie;
};
export default (sequelize, DataTypes) => {
  let MovieDetails = sequelize.define('MovieDetails', {
    _id: {type: DataTypes.INTEGER, unique: true},
    description_intro: DataTypes.TEXT,
    description_full: DataTypes.TEXT,
    yt_trailer_code: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        MovieDetails.belongsTo(models.Movie);
        MovieDetails.hasOne(models.MovieArtwork);
        MovieDetails.hasMany(models.Director);
        MovieDetails.hasMany(models.Actor);
      }
    }
  });

  return MovieDetails;
};
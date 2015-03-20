export default (sequelize, DataTypes) => {
  let Torrent = sequelize.define('Torrent', {
    url: DataTypes.STRING,
    hash: DataTypes.STRING,
    quality: DataTypes.STRING,
    seeds: DataTypes.INTEGER,
    peers: DataTypes.INTEGER,
    size: DataTypes.STRING,
    size_bytes: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Torrent.belongsTo(models.Movie);
      }
    }
  });
  return Torrent;
};
export default (sequelize, DataTypes) => {
  let Categories = sequelize.define('Categories', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Categories.belongsTo(models.Movie);
      }
    }
  });

  return Categories;
};
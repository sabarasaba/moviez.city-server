export default (sequelize, DataTypes) => {
  let Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Category.belongsTo(models.Movie);
      }
    }
  });

  return Category;
};
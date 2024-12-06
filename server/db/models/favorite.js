const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Sock }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Sock, { foreignKey: 'sockId' });
    }
  }
  Favorite.init(
    {
      userId: DataTypes.INTEGER,
      sockId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favorite',
    }
  );
  return Favorite;
};

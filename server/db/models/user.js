const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Sock, Cart, Favorite }) {
      this.hasMany(Sock, { foreignKey: 'userId' });
      this.hasMany(Cart, { foreignKey: 'userId' });
      this.hasMany(Favorite, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};

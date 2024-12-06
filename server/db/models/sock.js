const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Sock.init(
    {
      image: DataTypes.STRING,
      color: DataTypes.STRING,
      logo: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Sock',
    }
  );
  return Sock;
};

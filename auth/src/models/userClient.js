const { DataTypes } = require('sequelize');
const sequelize = require('../../database/connection');
const category = require('./category');
const product = require('./product');
const faq = require('./faq');

const UserClient = sequelize.define('userClient', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  device: DataTypes.STRING,
  tokenAuth: DataTypes.STRING(1000),
  tokenStatic: DataTypes.STRING(1000),
});

(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = UserClient;

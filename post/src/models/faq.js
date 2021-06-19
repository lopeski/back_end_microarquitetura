const { DataTypes } = require('sequelize');
const sequelize = require('../../databse/connection');

const Faq = sequelize.define('faq', {
  title: DataTypes.STRING,
  question: DataTypes.STRING,
  answers: DataTypes.STRING,
});

module.exports = Faq;

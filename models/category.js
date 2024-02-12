const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const сategory = sequelize.define('сategory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'category',
  timestamps: false,
});
module.exports = сategory;

const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(80),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  tableName: 'user',
  timestamps: false,
});
module.exports = User;

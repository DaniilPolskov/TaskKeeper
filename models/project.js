const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
}, {
  tableName: 'project',
  timestamps: false,
});

module.exports = Project;

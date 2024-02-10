const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./user'); 

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    allowNull: false,
  },
  dateCreate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dateDue: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
});

User.hasMany(Task, { foreignKey: 'userId' }); 

module.exports = Task;

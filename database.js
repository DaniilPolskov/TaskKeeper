const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('taskmanagerdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

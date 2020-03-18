const Sequelize = require('sequelize')
;
const db = new Sequelize('project-manager', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
});
module.exports = db;

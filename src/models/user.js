const Sequelize = require('sequelize')
;
const Db = require('../db')
;

const users = Db.define('user', {
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  email: Sequelize.STRING,
  profileImage: Sequelize.STRING,
});

module.exports = users;

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('movies', 'your_postgres_username', 'your_postgres_password', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movies = require('./movie')(sequelize, DataTypes);
db.users = require('./user')(sequelize, DataTypes);

module.exports = db;
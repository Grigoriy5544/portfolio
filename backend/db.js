const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.DB_URL + '?sslmode=require')

module.exports = sequelize

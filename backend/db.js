const pg = require('pg')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_URL + '?sslmode=require', {
    dialectModule: pg
})

module.exports = sequelize

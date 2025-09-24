const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const Brands = sequelize.define('Brands', {
    bName : {
        type:DataTypes.STRING,
        allowNull:false,
    }
})


module.exports = Brands
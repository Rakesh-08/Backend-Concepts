let sequelizeInstance = require('../connection');
let sequelize = require('sequelize');

let SuperHero = sequelizeInstance.define(
    'superHero',
    {
        id: {
            type: sequelize.DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: sequelize.DataTypes.STRING,
            allowNull:false

        },
        power: sequelize.DataTypes.BIGINT,
        comics:sequelize.DataTypes.STRING
    
    }, {
        timestamps:false
    }
)


module.exports = SuperHero;
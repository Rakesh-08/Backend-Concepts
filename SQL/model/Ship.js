let sequelize = require('sequelize');
let sequelizeInstance = require('../connection');

let Ships = sequelizeInstance.define('Ship', {
    name: sequelize.TEXT,
    crewCapacity: sequelize.INTEGER,
    amountOfSails:sequelize.INTEGER
},
    { timestamps: false });

module.exports = Ships;
let sequelize = require('sequelize');
let sequelizeInstance = require('../connection');

let Captain = sequelizeInstance.define('Captain', {
    name: sequelize.TEXT,
    skillLevel: {
        type: sequelize.INTEGER,
        validate: {
            min:1, max:10
        }
    }
},
    { timestamps: false });

module.exports = Captain;
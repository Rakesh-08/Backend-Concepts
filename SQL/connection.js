

let  sequelize  = require('sequelize');

let sequelizeInstance = new sequelize(
    'myfirstdb',
    'root',
    'Rakesh@08',
    {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliased: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000

        }
    }
)


module.exports = sequelizeInstance;
let sequelize = require('sequelize');

let sequelizeInstance = require('../connection')
let Captain = require('./Captain');
let Ships = require('./Ship');

Captain.hasOne(Ships);
Ships.belongsTo(Captain);

async function createTable() {
    await sequelizeInstance.sync({force:true});

    console.log('table created ');

    insertData()
}


async function insertData() {
    let ship = await Ships.create({
        name: 'Black Pearl',
        crewCapacity: 1000,
        amountOfSails:50
    })

    ship.createCaptain({
        name: 'Jack Sparrow',
        skillLevel: 1
    })
}


createTable()



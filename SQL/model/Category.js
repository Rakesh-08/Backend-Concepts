let sequelize = require('sequelize');
let sequelizeInstance = require('../connection');

let Categories = sequelizeInstance.define('categories',
    {
  id: {
    type: sequelize.DataTypes.BIGINT,
    autoIncrement: true,
        primaryKey: true
  },
  name: {
    type: sequelize.DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.DataTypes.STRING,
  }

    },
    {
        timestamps: false,
    }
);
        
module.exports = Categories;

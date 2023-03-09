let Categories = require('../model/Category');
let sequelize = require('sequelize')
let sequelizeInstance = require('../connection');

async function createTableCategories() {
    await sequelizeInstance.sync({ force: true });

    console.log('categories table created successfully')
    insertIntoCategories();
    getTableCategories();
}

async function insertIntoCategories() {
    await Categories.bulkCreate([
        {
            name: 'Mobile phone',
            description: 'Description about the handsets'
        },
        {
            name: 'T.V.',
            description: 'Description about the television'
        },
        {
            name: 'Laptop',
            description: 'features of laptop'
        },
        {
            name: 'Laptop',
            description: 'features of laptop'
        }
    ]
    )
}

async function getTableCategories() {
    // allCat = await Categories.findAll();

    // console.log(JSON.stringify(allCat))/




    // let allCat = await Categories.findAll({
    //     attributes: [
    //         [sequelize.fn('COUNT', sequelize.col('id')), 'count_categories']
    //     ]
    // })

    // console.log(allCat + ' categories available')




    // let NoOfCategories = await Categories.count({
    //     distinct: true,
    //     col:'name'
    // })
    // console.log( NoOfCategories + ' distinct  categories are available')



    let whereCond = await Categories.findAll({
      where: {
        [sequelize.Op.and]: [
          {
            id: 1,
          },
          {
            name:"Mobile phone",
          },
        ],
      },
    });


    console.log(JSON.stringify(whereCond))
}
createTableCategories();

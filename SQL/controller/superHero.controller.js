let sequelize = require('sequelize')
let sequelizeInstance = require('../connection');
let SuperHero= require('../model/SuperHero')

 async function createTableSuperHero() {
    await sequelizeInstance.sync({force:true})
     console.log('superHero table is created in myfirstdb')
 
}
 

async function InsertValuesIntoSuperHero() {
    // To insert a single row of value
       await SuperHero.create({
            name: "Mighty Thor",
            power: 90,
            comics: "Marvel"
        })
    
    // To insert more than one row in the table
    await SuperHero.bulkCreate([
        {
            name: 'batman',
            power: 75,
            comics: 'DC'
        },
        {
            name: 'Iron Man',
            power: 85,
            comics: 'Marvel'
        },
        {
            name: 'shaktiman',
            power: 95,
            comics: 'Indian Universe'
        },
        {
            name: 'Goku',
            power: 95,
            comics: 'Dragon ball Z'
        },
        
    ])
}


// ==== C- Create of CRUD =====

// createTableSuperHero();
 //InsertValuesIntoSuperHero();

async function getAllFromSuperHero() {
    let all = await SuperHero.findAll();
   
    console.log(JSON.stringify(all,null,3))

}

async function getMarvelSuperHero() {
    let MarvelHeroes = await SuperHero.findAll(
        {
            where: {
                comics:'Marvel'
            }
        }
    );

    console.log(JSON.stringify(MarvelHeroes, null, 3))

}

async function getSelectedColumns() {
    let sphs = await SuperHero.findAll({
        attributes: [
        [sequelize.fn('sum', sequelize.col('power')), 'Team strength'],'name'
        ]
    });

    console.log(JSON.stringify(sphs, null, 3))

}

async function getAllByExcluding() {
    let allWithoutComics = await SuperHero.findAll({
        attributes: { exclude: ['power'] }
        
    })


    console.log(JSON.stringify(allWithoutComics, null, 2))
}

async function getAllPowerfullSuperHero() {
    let powerfullHeroes = await SuperHero.findAll({
      where: {
        [sequelize.Op.or]: 
          {
            power: {
              [sequelize.Op.gte]: 85,
            },
          
          
            comics: {
              [sequelize.Op.eq]: "Marvel",
            }
          }
        
      },
    });

    console.log(JSON.stringify(powerfullHeroes,null,2))
}


// === R- Retrieval of CRUD ====

// getAllFromSuperHero();
// getMarvelSuperHero();
// getSelectedColumns();
// getAllByExcluding();
// getAllPowerfullSuperHero();


async function UpdatePower() {
    await SuperHero.update({
        'power': 83,
        'name': 'Batman- Dark Knight'
       
    }, {
        where: {
            comics: 'DC'
        }
    })

    console.log('power updated')
    
}



// ===== U- Update of CRUD =====
 
// UpdatePower();

async function deleteRows() {
    await SuperHero.destroy({
        where: {
            'comics': 'DC'
        }
    })

    console.log('row deleted sucessfully')
}

// ===== D- Delete of CRUD
// deleteRows();


async function groupBy() {
    let groupedHeroes = await SuperHero.findAll({
        attributes: ['comics', [sequelize.fn('sum', sequelize.col('power')), 'total strength']],
        group:'comics'
    })

    console.log(JSON.stringify(groupedHeroes,null,2))
}


// groupBy();

async function IncreasingOrDecreasingOrder() {
    let incrOrder = await SuperHero.findAll({
        order:[['power','DESC']]
    })

    console.log (JSON.stringify(incrOrder,null,2))
}

// IncreasingOrDecreasingOrder()

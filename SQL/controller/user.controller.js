let Users = require('../model/Users');

async function getAllUsers() {
    let users = await Users.findAll({
        where: {
            email: " rakesh@gmail.com"
        }
    });
    console.log(JSON.stringify(users))
}

getAllUsers();
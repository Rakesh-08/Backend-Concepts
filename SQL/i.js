let mySql = require("mysql");

let dbconnection = mySql.createConnection({
  host: "localhost",
  user: "Player",
  password: " Rakesh@08",
  database: "myfirstdb",
});

dbconnection.connect((err) => {
  if (err) {
    throw new Error(err);
  }

  console.log("connection established successfully");

  dbconnection.query('select*from products where category= laptop',(err,data)=>{
    if(err)
    throw (err);
    console.log(data)

  })
});

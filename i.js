let express = require("express");
let expressApp = express();


let logTime = function (req, res, next) {
  console.log("the login time of client is " + new Date());
  next();
};

let logurl = function (req, res, next) {
  console.log("the url used for routing is " + req.originalUrl);
  next();
};

expressApp.use(logTime);
expressApp.use(logurl);

expressApp.get("/user", (req, res) => {
  res.write(" USER ROUTE");
  res.end();
});

//let path= require('path')

//let option = { root: "/general" };

//expressApp.use(express.static('./general'))

expressApp.get("/file", (req, res) => {
  res.sendFile("/h.html")
  res.end();
});

expressApp.listen(8999, () => {
  console.log("server is running");
});

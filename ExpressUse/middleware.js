let express = require('express');
const path = require('path');
let expressApp = express()



let logTime= function(req,res,next){
    console.log('the login time of client is ' + new Date())
    next();
}

let logurl = function(req,res,next){
    console.log('the url used for routing is ' + req.originalUrl )
    next();
}

expressApp.use(logTime);
expressApp.use(logurl);

expressApp.get("/user", (req, res) => {
  res.write(" USER ROUTE");
  res.end();
});


let finalPath = path.join(__dirname , '../general' +  '/WebPage.html)')
 console.log(finalPath)


expressApp.get("/file", (req, res) => {
  
  res.sendFile(finalPath);
  res.end();
});



expressApp.listen(8999,()=>{
    console.log('server is running')
})
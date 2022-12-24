
let express = require('express');
let expressapp =express();

expressapp.get("/",(req,res)=>{
    res.write('This is my base route')
    res.end();
})

expressapp.get("/user", (req, res) => {
  res.write("This is user route");
  res.end();
});

//expressapp.get("/user/:userId", (req, res) => {     ----->>> this is supporting to any kind of data type  but we need only numbers as userid so we will use regular expression here
    expressapp.get(/^\/user\/(\d)$/, (req, res) => {
      res.write("This is user Route " + req.params[0]);
      res.end();
    });


expressapp.listen(0899,()=>{
    console.log('server is up and running')
})
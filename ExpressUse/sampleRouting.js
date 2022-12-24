let http = require('http')
let server= http.createServer((req,res)=>{
switch (req.url) {
  case "/food":
       res.write("this is a FOOD route");
       break;
  case "/clothes":
       res.write("this is a CLOTHES route");
       break;
  case "/electronics":
       res.write("this is a ELECTRONOCIS route");
       break;
  default:
    res.write("this is a HOME route");
    
} 
res.end();
})

server.listen(0899,()=>{
    console.log('server is ready to work')
})

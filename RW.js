

// console.log(new Date())
// console.log( Date.now());
// console.log(new Date().getTime());




// let fs= require('fs');   

// fs.readFile('./index.text','utf-8',function(error, data){
//     console.log(data)
// })

let fs= require('fs')
fs.open('index.text','a',function(error,fd){ //fd -- file descriptor
    if(error){
        console.log('cannot open the file')
        return;
    }
    fs.write(fd,' This is an additional content ', function (error,written,str){
        console.log(written)
        console.log(str);
    })
   
})
/*
let car={name: 'maruti',
          price : 97000}

module.exports= car


let c= require("./i");

console.log(c.price);
*/
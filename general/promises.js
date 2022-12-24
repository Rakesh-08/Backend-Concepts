// resolve /reject are args of promises callback and they are  also callback themselves

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
   
//     reject("Error has occured");
//   }, 2000);
// });

// promise1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("It will be printed irrespective of resolve/reject state");
 // });

//   let add= function(a,b){
//     let sum= a+b
//     return  new Promise((resolve,reject)=>{
//         if(sum){
//             resolve('The sum of a and b is ' + sum)
//         }
//         else{
//             reject('cannot add ! pass the args')
//         }
//     })
//   }


//   add()
//        .then((data)=>{
//               console.log(data)})
//        .catch((err)=>{
//               console.log(err)})
//        .finally(()=>{
//               console.log('add operation is finished')
//   })

let promise2 = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve('first promise')
    },3000)
})

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second promise");
  },2000);
});
let promise4= new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Third promise");
  },4000);
});

Promise.all([promise2,promise3,promise4])
            .then((data)=>{
                  console.log(data)})
            //.catch((err)=>{console.log(err)})


// ----------->>> Promise chaining

//             let promiseA = new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 resolve("this is first promise");
//               }, 6000);
//             });

//             let promiseB = new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 resolve("this is Second promise");
//               }, 8000);
//             });

//             let promiseC = new Promise((resolve, reject) => {
//               setTimeout(() => {
//                 resolve("this is Third promise");
//               }, 2000);
//             });

//             promiseA
//               .then((data) => {
//                 console.log(data);
//                 return promiseB;
//               })
//               .then((data) => {
//                 console.log(data);
//                 return promiseC;
//               })
//               .then((data) => {
//                 console.log(data);
//               });



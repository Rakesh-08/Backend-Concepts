// function MultipleOfTen(start = 0, end = Infinity, steps = 1) {
//   let nextIndex = start;
//   let result = 0;

//   return {
//     next: function () {
//       if (nextIndex  < end) {
//         result = (nextIndex + 1) * 10;
// nextIndex+=steps

//         return {
//           value: result,
//           Done: false,
//         };
//       } else {
//          result = (nextIndex + 1) * 10;
//         return {
//           value: result,
//           Done: true,
//         };

//       }
//     },
//   };
// }

// let Multiply= MultipleOfTen(0,6,2)
// let iterator = Multiply.next()
// while(!iterator.Done){
//     console.log(iterator.value)
//      iterator = Multiply.next();
// }

// ----------> Generator are pausible functions

// function* powerOfNo(n,m){
//   let count=1
//   while(count<=m){
//     yield Math.pow(n,count)
//     count++;
//   }
//   return;
// }
// function call(n,m){
// let iterator= powerOfNo(n,m)
// for(i=0; i<m; i++){
// console.log(iterator.next().value)
// }
// }

// call(2,8)

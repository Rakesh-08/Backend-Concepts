
 let add=  function(a,b){
    let sum= a+b
    return  new Promise((resolve,reject)=>{
        if(sum){
            setTimeout(()=>{
            resolve('The sum of a and b is ' + sum)},3000)
        }
        else{
            setTimeout(()=>{
                 reject('cannot add ! pass the args')
            },2000)
            
        }
    })
  }

  async function addcall(a,b){
    let sum= await add(a,b)
    console.log(sum);
    console.log("hwkk");

  }

  addcall(8,4)
  
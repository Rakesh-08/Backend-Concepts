function arrayPrint(arr,s,e){

    if(s==e){
        console.log(arr[s]);
        return;
    }
let mid= s+Math.floor((e-s)/2)
     arrayPrint(arr ,s,mid)
     arrayPrint(arr, mid+1,e)
    return;
}  



class Node{

    constructor(value){
        this.value= value;
        this.right = null;
        this.left = null;
         }
}

class binaryTree{
    constructor(){
        this.Root = null
    }
    
    AddNode(value){
       let node= new Node(value)

       if(!this.Root){
            this.Root= node
             }
    else {
        let current= this.Root

    while(true){
if(value<current.value){
       if(current.left== null){
            current.left= node
        break;}
     else{
         current= current.left }}
            
else{ if(current.right== null){
             current.right= node
        break;}
    else{
         current= current.right }   
       
    }  }
       
    }
}}

let b= new binaryTree()
b.AddNode(50)        // left side Binarry tree
b.AddNode(40)
b.AddNode(30)
b.AddNode(20)
b.AddNode(10)
b.AddNode(5)
console.log(b)


//polyfill for map

// function double(x){
//     return x+x;
// }

// Array.prototype.mymap = function(callback){
//     let arr =[]
//     for(let i=0; i<this.length ; i++){
//       arr.push(callback(this[i]))
//     }
//     return arr;
// }

// const numbers = [1,2,3]
// console.log(numbers.mymap(double))


//polyfill for filter

Array.prototype.ourfilter = function(callback){
    let res=[]
    for(let i=0; i< this.length; i++){
        if(callback(this[i]))
            res.push(this[i])
    }
    return res;
}

//polyfill for reduce

function addition(acc, current){
    return acc + current;
}


Array.prototype.ourreduce = function(callback,initial){
   
 let acc =  initial !== undefined ? initial : this[0]
 for(let i=0; i<this.length; i++){
    acc = callback(acc,this[i])

 }
 return acc;

}
const numbers = [1,2,3]
console.log(numbers.ourreduce(addition,0))
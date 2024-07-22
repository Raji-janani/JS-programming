arr= [5,6,6,7,4]

// arr.length= 0;

// arr.splice(0,arr.length)

// while(arr.length){
//     arr.pop();
// }


const output = (arr,ele) => Math.max(...arr.join('').split(6).map((item)=>item.length+1))

console.log(arr)
console.log(output(arr,6))
const user = [
    {firstname: "raja" ,lastname: "lakshmi", age: 25},
    {firstname: "raji" ,lastname: "priya", age: 28},
    {firstname: "rajan" ,lastname: "dharshan", age: 35},
    {firstname: "senthil" ,lastname: "kumar", age: 32}
]

// age>30 [rajan, senthil]


// const output = user.reduce((acc,curr)=>{
//   if(curr.age > 30){
//     acc.push(curr.firstname);
//   }
//   return acc;
// },[])


// Use of filter and map
const output = user.filter((per)=>{
  return (per.age > 30) 
}).map((per)=>per.firstname)

console.log(output)
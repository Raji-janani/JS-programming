const user = [
    {firstname: "raja" ,lastname: "lakshmi", age: 25},
    {firstname: "raji" ,lastname: "priya", age: 28},
    {firstname: "rajan" ,lastname: "dharshan", age: 35},
    {firstname: "senthil" ,lastname: "kumar", age: 32}
]

// age>30 [rajan, senthil]


const output = user.reduce((acc,curr)=>{
  if(curr.age > 30){
    acc.push(curr.firstname);
  }
  return acc;
},[])
console.log(output)
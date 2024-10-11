
const arr = [[1,2],[3,4,7]]

const result = arr.flat()
console.log(result)

//Another approach

const result1 = arr.reduce((acc,cur)=> acc.concat(cur),[])
console.log(result1)
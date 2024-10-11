// // To find given year is leap year or not

// const findLeapyear = (year) => year%4 === 0 ? true: false
// console.log(findLeapyear(2024))

// To find object properties are same in two obj

// const objA = {a:1,b:1,c:1}
// const objB = {a:1,b:2,c:1}
// const objC = {a:1,b:1,d:1}

// const SimilarObjects = (a,b) => Object.keys(a).every(key=> b[key])
// console.log(SimilarObjects(objA,objC))


// To find no duplicate number in an array

const noDuplicate = (arr) =>{
   let counts = new Map()
   let result=[]
    
   for(let num of arr){
    if(counts.has(num)){
      counts.set(num, counts.get(num)+1)
    }
    else{
        counts.set(num,1)
    }
   }

   for(const [num,count] of counts.entries()){
      if(count=== 1){
        result.push(num)
      }
   }
   return result.toString();
}
console.log(noDuplicate([2,3,2,3,4,5,5,6]))


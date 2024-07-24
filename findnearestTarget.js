// Find nearest target value in given array
// target is 5 , arr=[2,4,7,9] then o/p is 4

const arr =[1,4,5,7,3,9]

function findTarget(arr,target){
    arr.sort((a,b)=>(Math.abs(b-target)-Math.abs(a-target)))
    return arr.pop();
}

console.log(findTarget(arr,6));

//if i have more than 1 value nearest to target

function findNearestNum(arr,target) {
   let difference = arr.map((num)=> ({
    num, 
   diff: Math.abs(num-target)
   }))
   console.log(difference)

   let minDiff = Math.min(...difference.map(d => d.diff))

  let result= difference.filter((d)=>(d.diff === minDiff)).map((d)=>(d.num))
   
   
   return result;
}

console.log(findNearestNum(arr,6))



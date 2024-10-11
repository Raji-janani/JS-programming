const arr= [2,3,4,5,6,8,7,0]
const targetmap = new Map();
const targetarr =[]

const findTarget = (arr,target)=>{
  for(let num of arr){
    let complement = target-num;
    if(targetmap.has(complement)){
        targetarr.push([complement,num])
    }
    targetmap.set(num,true)
  }
  return targetarr
}

console.log(findTarget(arr,9))


const intersectionArr = (arr1,arr2)=> {
    let set1 = new Set(arr1)
    let intersection = new Set()
for (let num of arr2){
    if(set1.has(num)){
        intersection.add(num)
    }
}

return Array.from(intersection);

}

console.log(intersectionArr([2,3,5,1,2],[4,3,2,7,8,2,1]))

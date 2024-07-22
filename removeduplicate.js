
const arr = [1,2,2,4,5,6]

function removeDuplicate(arr){
    return [...new Set(arr)]
}

const newarr = removeDuplicate(arr);
console.log(newarr)

const arr2 = new Set(arr);
console.log(arr2)
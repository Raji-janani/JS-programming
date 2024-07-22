// Find missing number in given 1 to n array

function findmissingNum( arr){
    const n = arr.length + 1;
    const expextedSum = (n*(n+1))/2;
    const actualSum = arr.reduce((acc,cur)=> acc+cur, 0)
    const res = expextedSum - actualSum;
    return res;
}

console.log(findmissingNum([1,2,3,4,6,7]))


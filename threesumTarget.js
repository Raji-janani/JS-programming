// To find three values in an array that sum up to a given target value
arr =[1, 2, 3, 4, 5, 6, 7, 8, 9]

function findTarget(arr,target){
 let result=[];
//  let seen = new Set();
for( let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        for(let k=j+1; k<arr.length; k++){
            if(arr[i]+arr[j]+arr[k] === target)
                {
                    // this is just for tracking unique set
            //     let triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
            //      let tripleStr = triplet.toString()
            //   if (!seen.has(tripleStr)){
            //         seen.add(tripleStr)
            //         result.push(triplet)
            // }
            result.push([arr[i], arr[j], arr[k]]);
                }
            
        }
    }
}
return result;
}

console.log(findTarget(arr,15))


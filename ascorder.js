arr = [2,3,5,1,8,4,6]

function findSort(arr){

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let min= 0;
                min = arr[j];
                arr[j]= arr[i];
                arr[i]= min
            }
        } 
    }
 return arr;
}


console.log(findSort(arr));
console.log(arr.sort());
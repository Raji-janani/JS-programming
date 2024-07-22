// Funtion of 2 sum

function sum(a,b){
    return a+b;
}

const value = sum(5,6);
console.log(value);


// function to find max array value


const arr= [3,4,6,7,2]

const arrayValue = (arr) =>{
  return Math.max(...arr)
}

const ans = arrayValue(arr);
console.log(ans);
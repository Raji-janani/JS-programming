let arr = ['a','a','c',2,3,3,3]

let count = {};
let arruniq=[];

function uniq(){
arr.forEach((ele) => {
    if(count[ele]){
        count[ele]++
    }
    else{
        count[ele]=1
    }
})

for(let i in count){
    if(count[i] == 1){
     arruniq.push(i)  
    } 
}
return arruniq;
}

console.log(uniq())
console.log(count)
// function findLongword(sentence){
// let longword =[];
// const words = sentence.split(' ');
// for(let i=0; i<words.length; i++){
//     if(longword.length < words[i].length){
//         longword = words[i]
//     }

// }

// return longword;
// }
// console.log(findLongword('The quickest brown fox jumps over the lazy yesterday yesterday'));

//Another Approach
function findLongword(sentence){
    const words =sentence.split(' ')
const result = words.reduce((acc,cur)=>{
    if(acc[0].length < cur.length){
        return [cur]
    }
    else if(acc[0].length === cur.length){
     acc.push(cur)
    }
    return acc
},[''])
 return  result.length === 1 ? result[0] : result
}

console.log(findLongword('The quickest brown fox jumps over the lazy yesterday yesterday'));
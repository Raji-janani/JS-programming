function findLongword(sentence){
let longword ="";
const words = sentence.split(' ');
for(let i=0; i<words.length; i++){
    if(longword.length < words[i].length){
        longword = words[i];
    }

}

return longword;
}
console.log(findLongword('The quickest brown fox jumps over the lazy yesterday'));

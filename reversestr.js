const words = "hello world"


const spreadarr = [...words].reverse().join('')
console.log(spreadarr)

// const rev = words.split('').reverse().join('');
// console.log(rev)

const rev = words.split('').reduce((acc,char)=> char + acc,"")
console.log(rev)

function reverseStr(words){
  const  revArr= []
  for(let i=words.length; i>=0; i--){
     revArr.push(words[i])
  }
  return revArr;
}

console.log(reverseStr(words).join(''))

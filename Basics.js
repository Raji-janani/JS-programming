// To print true if any one of the num is 100 or sum is 100

const findSum = (a,b)=>{
  return  a === 100 || b===100 || a+b === 100
}

console.log(findSum(40,90))

// To print extension file as output

const findExtension = (str)=>{
    return str.slice(str.lastIndexOf('.'))
}

console.log(findExtension("home.config.php"))

// reverse the sentence in same order

const reverseWords = (str) =>{
   let words = str.split(' ')
   console.log(words)
   let reverse= words.map((item)=> item.split('').reverse().join(''))
   console.log(reverse)
   let reversedSentence = reverse.join(' ')
   return reversedSentence;
}

console.log(reverseWords("welcome home world"))

// another optimised approach

const reverseWord = (str)=>{
   let words= ''
   let result = ''

   for(let char of str){
      if(char === ' '){
         result += words.split('').reverse().join('') + ' '
         words= ''
      }
      else{
         words += char
      }
   }

// for last word
 result += words.split('').reverse().join('');
 return result;

}
console.log(reverseWord("welcome home world"))


// To print the next character of each given character in string
// eg: i/p = abc  o/p =bcd

const findNextChar = (str) =>{
   return str.split('').map((char)=> String.fromCharCode(char.charCodeAt(0)+1)).join('')
}

console.log(findNextChar("aeg"))

// To print reverse of number

const reverseNum = (num)=>{
  let result= num.toString().split('').reverse().join('')
  return parseInt(result)

}

console.log(reverseNum(123))


// To print date in particular format

const date= new Date()
const fy = date.getFullYear()
const dd = date.getDate() 
const mm = date.getMonth() + 1
console.log(dd + '-' + mm + '-' + fy)


// To print New! before str and if the str has New! return the original string

const newString = (str)=>   (str.indexOf('New!')===0) ? str : `New! ${str}`

console.log(newString("hello"))



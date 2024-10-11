// To print the string with alternate letters and at the end remaining letters should be added

const str1 = "Hello"
const str2 = "world123"
const strlen = Math.min(str1.length,str2.length)
let result =''
for(let i=0; i<strlen; i++){
   result += str1[i]+str2[i]
}

const final = str1.length > str2.length ? result+ str1.slice(str2.length) : result+ str2.slice(str1.length)
console.log(final)
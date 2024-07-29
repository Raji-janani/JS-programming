//To print string of its first 3 letters and last 3 letters string count should be 3 or more, else print original string

const newString = (str) =>{
if(str.length<=3)
    return str;
else{
     let start = str.slice(0,3);
     let end = str.length>=6 ? str.slice(-3) : str.slice(3)
     return start + end;
}
   
}
console.log(newString("hel"))

//To print first half of even length string

const halfString = (str) => str.slice(0,str.length/2)

console.log(halfString("health"))

//To print concat of two string but removing 1st letters of those

const twoStrings = (str1,str2) => str1.slice(1) + str2.slice(1)

console.log(twoStrings("hello","world"))

//To find nearest to the number 100, in given values

const findNearest = (num1, num2) =>  {
    if(num1=== num2) return num1
    else if( Math.abs(num1-100) === Math.abs(num2-100)) {
        let num =  `${num1},${num2}`
        return num
    }
        
     else{
       return  Math.abs(num1-100) > Math.abs(num2-100) ? num2 : num1 
     }
}

console.log(findNearest(102,98))


//To find occurence of character in string

const findOccurrence = (str,char) =>{
    let count=0;
  for(let letter of str){
    if(letter === char)
        count +=1;
  }
  return count;

}

console.log(findOccurrence("hellollog",'l'))

//Another approach, also check the occurence between 2 and 4

const findOccurcount = (str, char)=>  str.split('').filter((ch)=> ch=== char).length


const Occur2to4 = (str,char) => findOccurcount(str,char) >=2 && findOccurcount(str,char) <=4

console.log(Occur2to4("oooh",'o'))

//To find count of even numbers in an array

const findEven = (arr) => arr.filter((num) => num%2 === 0).length

console.log(findEven([2,3,7,9,5]))

//To find even number upto given number

const findRangeEven = (limit) =>{
    let count=0;
    for(let i=1; i<=limit; i++){
        if(i%2 === 0){
            count +=1
        }
    }
   return count;
}
console.log(findRangeEven(5))

//To find largest even number 

const largestEven = (arr) => Math.max(...arr.filter((num)=> num%2 === 0))

console.log(largestEven([6,5,3,2,12,3,4]))

//To find given array is in ascending order

const isAscending = (arr)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i+1]< arr[i]) return false
    }
    return true;
}

console.log(isAscending([3,4,5,6,7]))

//To replace first number in string with '$'

const findReplaceNum = (str)=> str.replace(/[0-9]/,'$')

console.log(findReplaceNum("he2llo3world5"))
function findpalindrome(str){
   if (str.split('').reverse().join('') === str)
    return "this is palindrome"
else
 return "this  is not palindrome"
}

console.log(findpalindrome(JSON.stringify(123)))
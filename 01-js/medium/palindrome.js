/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length=== 0) return true;

  str = str.toLowerCase()

   str = str.replace(/[^a-z0-9]/g, "");
  
  let rev = '';
  for (let i = str.length-1; i>=0; i--) {
      rev += str[i]
  }
    if(str === rev ) {
      return true;
    }else {
      return false;
    }
      
}

module.exports = isPalindrome;
console.log(isPalindrome("madam"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("starbucks"))
console.log(isPalindrome("Madam"))
console.log(isPalindrome("12321"))
console.log(isPalindrome("race car"))
console.log(isPalindrome("ma dam"))

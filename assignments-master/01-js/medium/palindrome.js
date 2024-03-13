/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let strCopy = str.toLowerCase();
  let start = 0;
  let end = strCopy.length - 1;
  while (start < end) {
    if (strCopy[start] !== strCopy[end]) {
      return false;
    }
    return true;
  }

  module.exports = isPalindrome;

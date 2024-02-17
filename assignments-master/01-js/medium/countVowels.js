/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let strCopy = str.toLowerCase()
  console.log(strCopy)
    let count = 0;

    if (!strCopy.length){
      return 0;
    }

    for (let i = 0; i < strCopy.length; i++){
      if (strCopy[i] === 'a' || strCopy[i] === 'e' || strCopy[i] === 'i' || strCopy[i] ==='o' ||strCopy[i] === 'u'){
        console.log(strCopy[i])

        count+=1;

      }
    }
    return count;

}

res = countVowels('Hello, world!')
console.log(res)
module.exports = countVowels;
/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function push(str, strinto){

  



}
function isAnagram(str1, str2) {

  str1 = str1.toLowerCase();
  str2 =  str2.toLowerCase();

  if (str1.length === str2.length){

    let str1Array = [];
    let str2Array = [];

    str1.forEach(str1.push());
    // for (let i = 0; i < str1.length; i++){
    //     str1Array.push(str1[i]);
    // }
    

    for (let i = 0; i< str2.length; i++){
      str2Array.push(str2[i]);
    }

    console.log(str1Array, str2Array)
    const result = str1Array.every(val => str2Array.includes(val));

    if (result){
      return true
    }
    else{
      return false
    }
  }
  else{
    return false
  }
  

}
if(isAnagram('Debit Card', 'Bad Credit')){
  console.log(true)
}
else{console.log(false)}
module.exports = isAnagram;

// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
//accepts a sentence or phrase (a string) and returns a string with the words in s reversed. Words are delimited by a single space. Use a for
 // loop, and arrow syntax. Hint: String.split method.
let revWords1 = (str) => {
let arr = sent.split(" ");
let result = "";
for (var i = 0; i < arr.length; i++) {
  revWord(arr[i])
} 
return result
}
//for.Each
let revWords2 = (str) => {
  //turn string into array
  let arr = str.split("");
  let result = "";
  str.forEach((char)=>{
    result = char + result;
  })
  return result;
}
//for.. of loop
let revWord3 = (str) => {
  let arr = str.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
  return result;
}

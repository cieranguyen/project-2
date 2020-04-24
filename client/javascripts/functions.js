// jshint esversion: 6
//extra credit
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
  let words = [],
  result = "";
  words = str.match(/\S+/g);
  for (var i = 0; i < words.length; i++) {
    result += words[i].split('').reverse().join('') + " ";
  }
  return result;
};
//for.Each
let revWords2 = (str) => {
  let words = [],
  result = "";
  words = str.match(/\S+/g);
  words.forEach(function(words) {
    result +=  `${words[i].split('').reverse().join('')}` + " ";
  });
  return result;
};
//for.. of loop
let revWords3 = (str) => {
  let arr = [],
  result = "";
  arr = str.match(/\S+/g);
  for (char of arr) {
    result += char.split('').reverse().join('') + " ";
  }
  return result
}

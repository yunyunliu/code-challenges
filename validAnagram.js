const assert = require('assert');
// a problem that can be solved using frequency counter pattern
// given 2 strings, write a function that determines if second string is anagram of first string
// anagram: word/phrase formed by rearranging the letters of another word/phrase
// examples:
// validAnagram('', '') -> true
// validAnagram('aaz', 'zza') -> false
// validAnagram('anagram', 'nagaram') -> true
// validAnagram('rat', 'car') -> false
// validAnagram('awesome', 'awesom') -> false
// validAnagram('texttwisttime', 'timetwisttext') -> true

// in: 2 strings, out: boolean
// constraints: strings will only contain lowercase letters (ie no numbers/spaces/punctuation)
// edge case: string1 and string2 are the same, does that count as an anagram -> yes

// outline: str1 and str2 are anagrams of each other if they contain the same number of characters
// AND the letters occur the same number of times
// pseudocode
// check that strings are same length: if not return false
// initialize counter1 and counter2 as empty objects
// loop through str1
//   at each letter: if letter exists as a key in counter1, increment value by one
//   if letter not a key in counter1: add it as key and set the value to 1
// do the same with str2 and counter2
// loop through counter1,
//   at each key,
//   if key is not also a key on counter2: return false
//   if key does exist, if its value is different from the value on counter1: return false
// return true
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const count1 = {};
  const count2 = {};
  for (let char of str1) {
    count1[char] = count1[char]++ || 1;
  }
  for (let char of str2) {
    count2[char] = count2[char]++ || 1;
  }
  for (let key in count1) {
    if (!(key in count2) || count1[key] !== count2[key]) {
      return false;
    }
  }
  return true;
}

// console.log('empty string is anagram of empty string:', validAnagram('', ''));
// console.log('"aaz" is anagram of "zza":', validAnagram('aaz', 'zza'));
// console.log('"rat" is anagram of "car":', validAnagram('rat', 'car'));
// console.log('"anagram" is anagram of "nagaram":', validAnagram('anagram', 'nagaram'));
// console.log('"awesome" is anagram of "awesom":', validAnagram('awesome', 'awesom'));
// console.log('"texttwisttime" is anagram of "timetwisttext":', validAnagram('texttwisttime', 'timetwisttext'));

// alternate solution
function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const count = {};
  // build counter object
  for (let char of str1) {
    count[char] ? count[char]++ : count[char] = 1;
  }
  // compare letter frequencies in str2 to frequencies in counter
  for (let char of str2) {
    // because undefined and 0 are both falsey, will
    // OR if the value of key char in count has been decremented to 0 (which means a difference in frequency ie not anagrams)
    if (!count[char]) {
      return false; // return false if char doesn't exist as a key on count
    }
    count[char]--;
  }
  return true;
}

console.log('empty string is anagram of empty string:', validAnagram2('', ''));
console.log('"aaz" is anagram of "zza":', validAnagram2('aaz', 'zza'));
console.log('"rat" is anagram of "car":', validAnagram2('rat', 'car'));
console.log('"anagram" is anagram of "nagaram":', validAnagram2('anagram', 'nagaram'));
console.log('"awesome" is anagram of "awesom":', validAnagram2('awesome', 'awesom'));
console.log('"texttwisttime" is anagram of "timetwisttext":', validAnagram2('texttwisttime', 'timetwisttext'));

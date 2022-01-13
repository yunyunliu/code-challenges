// can be solved using frequency counter pattern
/*
given two positive integers, determine if the two numbers have the same frequency of digits
constraint: solution must have O(n) time complexity
example inputs and outputs:
n1=182, n2=281 -> true
n1=34, n2=14 -> false
n1=3589578, n2=5879385 -> true
n1=22, n2=222 -> false

input: two positive integers, output: true/false
2 number with same frequency, like an anagram with numbers

steps:
1. if numbers equal eachother, return true
2. initialize two empty objects for counts
3. convert int1 and int2 to strings, so they they can be looped over
4. loop over int1
  - check if count1 contains value, if yes increment, if no, set equal to 1
5. do thes same for int2 and count2
4. loop through keys in counter1, at each key, check if counter2 also contains that key
  if no: return false
  if yes: check if the value key in count2 is the same as the value of key in count2
    if no: return false:
5. after going through entire loop, return true
*/

function sameFrequency(int1, int2) {
  const str1 = int1.toString();
  const str2 = int2.toString();
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

console.log('expect "true":', sameFrequency(182, 281));
console.log('expect "false":', sameFrequency(34, 14));
console.log('expect "true":', sameFrequency(3589578, 5879385));
console.log('expect "false":', sameFrequency(22, 222));

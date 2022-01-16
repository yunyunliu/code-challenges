/* can be solved with multiple pointers
given 2 strings determine whether the characters of first string form a subsequence of
the characters in the second string
ie checks whether the characters in the first string appear somewhere in the second string
in the same order
ex:
'hello', 'hello world' -> true
'sing', 'sting -> true
'abc', 'abracadabra' -> true

pointer to 1st index of str1, pointer to 1st index of str 2
start iterating through str2, at each index check the if value equals the value str2 counter is pointing at: if yes, add 1 to str2 pointer
if no, continue until reach end of string , if str1 counter === str2.length, return true, else false
*/

function isSubsequence(str1, str2) {
 let str1Index = 0;
 for (let i = 0; i < str2.length; i++) {
  if (str2[i] === str1[str1Index]) {
    str1Index++;
  }
  if (str1.length === str1Index) {
    return true;
  }
 }
 return false;
}

console.log('expect "true":', isSubsequence('hello', 'hello world'));
console.log('expect "true":', isSubsequence('sing', 'sting'));
console.log('expect "true":', isSubsequence('abc', 'abracadabra'));

/*
Given an array arr[] of N strings, each containing words with upper or lower case English alphabets,
create a sentence in a Camel Case format using them.

example:
Input: ['aPPle', 'onE'] -> 'appleOne'
Input: ['click', 'here', 'FOR', 'Solution] -> 'clickHereForSolution'
or
Input: 'aPPle onE' -> 'appleOne'
Input: 'click here FOR Solution' -> 'clickHereForSolution'
*/

function camelCase(strings) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    let current = strings[i].toLowerCase();
    if (i !== 0) {
      const first = current[0].toUpperCase();
      const rest = current.slice(1);
      current = first + rest;
    }
    result += current;
  }
  return result;
}

function camelCase2(str) {
  const split = str.split(' ');
  return camelCase(split);
}
// console.log(camelCase(['aPPle', 'onE']));
// console.log(camelCase(['click', 'here', 'FOR', 'Solution']));
// console.log('split:', 'aPPle onE'.split(' '));
console.log('expect "clickHereForSolution"', camelCase2('click here FOR Solution'));

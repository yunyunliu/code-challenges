// problem can be solved ussing frequency counter or multiple pointers pattern
/*
write function where accepts a variable number of arguments, and checks whether there are any
duplicates among the arguments passed in
examples:
areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a','b','c', 'a') // true

constraints: space complexity O(n); time complexity O(n) or O(nlogn)
*/

function areThereDuplicates(...args) {
  const count = {};
  for (let i = 0; i < args.length; i++) {
    const item = args[i];
    count[item] ? count[item]++ : count[item] = 1;
  }
  for (let item in count) {
    const current = count[item];
    if (current > 1) {
      return true;
    }
  }
  return false;
}

console.log('expect "false"', areThereDuplicates(1, 2, 3));
console.log('expect "true"', areThereDuplicates(1, 2, 2));
console.log('expect "true"', areThereDuplicates('a','b','c', 'a'));

// implement function that accepts a sorted array of integers, and counts the unique
// values in array
// in: array of postive or negative ints, sorted out: integer representing the number of
// unique values in array (values that only occur once)

// ex:
// countUniqueValues([1,1,1,1,2]) -> 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) -> 7
// countUniqueValues([]) -> 0
// countUniqueValues([-2,-1,-1,0,2]) -> 4

// pseudo code: if a number appears more than once, they will all be next to each other since the list is sorted
// initialize counter variable to keep track of unique values
// so iterate through list checking at each element if it's value is the same as the value of the next element
// if values are different, add 1 to counter; otherwise don't do anything

function countUniqueValues(arr) {
  let i = 0;
  let j = i + 1;
  let count = 0;
  while(j < arr.length) {
    if (arr[i] !== arr[j]) {
      count++;
    }
    i++;
  }
  return count;
}

console.log('expect "2":', countUniqueValues([1,1,1,1,2]));
console.log('expect "7":', countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log('expect "0":', countUniqueValues([]));
console.log('expect "4":', countUniqueValues([-2,-1,-1,0,2]));

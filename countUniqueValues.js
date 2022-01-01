// solution uses multiple pointers pattern
// implement function that accepts a sorted array of integers, and counts the unique
// values in array
// in: array of postive or negative ints, sorted out: integer representing the number of
// unique values in array (values that only occur once)

// ex:
// countUniqueValues([1,1,1,1,2]) -> 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) -> 7
// countUniqueValues([]) -> 0
// countUniqueValues([-2,-1,-1,0,2]) -> 4

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    // counting the differences
    // since i only moves whenever the numbers are different, it represents the number of unique values
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1; // add 1 because since i is an index, it starts counting from 0 instead of 1
}


console.log('expect "2":', countUniqueValues([1,1,1,1,2]));
console.log('expect "7":', countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log('expect "0":', countUniqueValues([]));
console.log('expect "4":', countUniqueValues([-2,-1,-1,0,2]));

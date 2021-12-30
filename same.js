const assert = require('assert');

// function which accepts 2 arrays,
//  function returns true if every value in the array1 has it's corresponding value squared
//  in the array2, the frequency of the values must be the same

//  ex same([1,2,3], [4,1,9]) -> true
//  same([1,2,3], [1,9]) -> false
//  same([1,2,1], [4,4,1]) -> false

// check if arrays are equal length
//   if true
//     at each item in array1, square it and get array2.indexOf that value
//     if the result = -1, it means that the value isn't in array 2, so return false
//      otherwise use array.splice and value of indexOf to remove square value from array 2
//      after comparing every item, return true
//   arrays not equal length return false

// suboptimal/naive solution because time complexity is O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { // outer loop
    const val = arr1[i];
    const squaredIndex = arr2.indexOf(val ** 2); // inner loop
    if (squaredIndex === -1) {
      return false;
    }
    arr2.splice(squaredIndex, 1);
  }
  return true;
}


// optimal solution uses 3 separate loops and has time complexity O(n)

function sameLinear(arr1, arr2) {
  // check lengths
  if (arr1.length !== arr2.length) {
    return;
  }
  // initialize 2 empty objects, counter1 and counter2 used to store frequency of each value in arr1 and arr2
  const count1 = {};
  const count2 = {};
  // 1. for-of loop to get frequencies of arr1
  for (let val of arr1) {
    count1[val] = count1[val]++ || 1;
  }
  // 2. for-of loop to get frequencies of arr2
  for (let val of arr2) {
    count2[val] = count2[val]++ || 1;
  }
  // 3. for-in loop to compare frequencies in counter1 and counter1
  for (let val in count1) {
    const square = val ** 2;
    if (!(square in count2)) {
      return false;
    }
  }
  return true;
}

console.log('same', same([1,2,3], [4,1,9]));
console.log('sameLinear', sameLinear([1,2,3], [4,1,9]));

assert.strictEqual(sameLinear([1,2,3], [4,1,9]), true);

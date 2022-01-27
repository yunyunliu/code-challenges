// recursive function that accepts a an array and a callback, and returns true if any value in the array returns true when
// passed into callback, else returns false

function someRecursive(arr, callback) {
  if (arr.length === 1) return callback(arr[0]); // exit condition: if there is only one value left in the array, triggers collapsing of callstack
  const firstVal = arr[0];
  const restArray = arr.slice(1);
  return callback(firstVal) || someRecursive(restArray, callback); // && means test if all values of array evaluate to true; use || to check if any value in array evaluates to true
}

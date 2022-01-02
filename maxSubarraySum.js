// problem solved using sliding window pattern

// problem: given an array of integers and a number n, find the maximum sum of n
// consecutive elements in the array
// examples inputs and outputs:
  // [1,2,5,2,8,1,5], n=2 -> 10 because 2 + 8 = 10
  // [1,2,5,2,8,1,5], n=4 -> 17 because 2 + 5 + 2 + 8 = 17
  // [4,2,1,6], n=1 -> 6
  // [4,2,1,6,2], n=4 -> 13 (4 + 2 + 1 +6 = 13)
  // [], n=4 -> null

  // suboptimal solution, time complexity O(n^2)

  // initialize variable max for storing largest sum to 0
  // loop through array until you can't make any more sets of n elements/numbers
  // the find this: arr.length - 1 - n is the index when there are still n numbers left in array; the number
  // we're looking for is 1 more than that since that is the index where there are no more groups of n elements left in array
  // therefore exit condition of loop is arr.length - n + 1
  // inside this loop, use another loop to get sum of n numbers (starting with current index)
  //   if this sum is greater than max, reassign max to equal sum (condition: j < n-1); otherwise do nothing
  // when done looping, return max

  function maxSubarraySum(arr, n) {
    if (n > arr.length) { // if there aren't at least n elements in the array, you can't do anything
      return null;
    }
    let max = -Infinity; // not initialized to 0 because that would only work for array containing all positive numbers.
    // since the sums will always be negative in an array of negative numbers, the initial value of 0 would always be greater
    for (let i = 0; i < arr.length - n + 1; i++) { // we want to stop looping when there aren't enough numbers left in the array to make another set of n
      // arr.length - 1 - n -> means stop looping when there are n numbers left, that's still enough to make another group of n, therefore add 1
      let sum = 0;
      for (let j = i; j < i + n; j++) {
         sum += arr[j]
      }
      if (sum > max) {
        max = sum;
      }
      // console.log('max', max, 'sum', sum)
    }
    return max;
  }
  console.log('expect "10":', maxSubarraySum([1,2,5,2,8,1,5,4], 2));
  console.log('expect "17":', maxSubarraySum([1,2,5,2,8,1,5], 4));
  console.log('expect "6":', maxSubarraySum([4,2,1,6], 1));
  console.log('expect "13":', maxSubarraySum([4,2,1,6,2], 4));
  console.log('expect "null":', maxSubarraySum([], 4));

/* optimal solution: time complexity O(n), space complexity O(1)
ex. [1,2,5,2,8,1,5], n=4 -> 17
divided in windows:

[1,2,5,2,8,1,5] array
[1,2,5,2] window 1, sum 10
  [2,5,2,8] window 2, sum 17
    [5,2,8,1] window 3, sum 16
      [2,8,1,5] window 4, sum 16

since the windows overlap, only numbers at the ends are changing
for instance:
window 1 and 2 both include [2,5,2]
to get window2 from window1, the 1 is dropped at beginning and 8 added to end, which reflects the movement along the array
therefore to find window2Sum from window1Sum, subtract 1 and add 8
*/

function maxSubarraySum2(arr, n) {
  if (n > arr.length) { // if there aren't at least n elements in the array, you can't do anything
    return null;
  }
  let max = 0;
  let sumWindow = 0; // sum of current window
  for (let i = 0; i < n; i++) { // sum of first n numbers aka first window
    max += arr[i];
  }
  sumWindow = max; // sum of first window, this is the first max since there aren't any other sums to compare to
  for (let i = n; i < arr.length; i++) { // begin looping at index n, which is the index of the last number of the second window.
    sumWindow = sumWindow - arr[i - n] + arr[i]; // arr[i - n] is the last number of previous window and arr[i] is the last number of current window
    // because each window is n numbers long
    if (sumWindow > max) { // compare sum of current window to max
      max = sumWindow;
    }
  }
  return max;
}

console.log('expect "10":', maxSubarraySum2([1,2,5,2,8,1,5,4], 2));
console.log('expect "17":', maxSubarraySum2([1,2,5,2,8,1,5], 4));
console.log('expect "6":', maxSubarraySum2([4,2,1,6], 1));
console.log('expect "13":', maxSubarraySum2([4,2,1,6,2], 4));
console.log('expect "null":', maxSubarraySum2([], 4));

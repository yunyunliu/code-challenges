// problem solved using sliding window pattern

// problem: given an array of integers and a number n, find the maximum sum of n
// consecutive elements in the array
// examples:
  // [1,2,5,2,8,1,5], n=2 -> 10 because 2 + 8 = 10
  // [1,2,5,2,8,1,5], n=4 -> 17 because 2 + 5 + 2 + 8 = 17
  // [4,2,1,6], n=1 -> 6
  // [4,2,1,6,2], n=4 -> 13
  // [], n=4 -> null

  // suboptimal solution, time complexity O(n^2)

  // initialize variable max for storing largest sum to 0
  // loop through array
  // inside this loop, use another loop to get sum of n numbers (starting with current index)
  //   if this sum is greater than max, reassign max to equal sum (condition: j < n-1); otherwise do nothing
  // when the entire array has been looped through, return max

  function maxSubarraySum(arr, n) {
    if (n > arr.length) {
      return null;
    }
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < i + n; j++) {
        sum += arr[j];
      }
      if (sum > max) {
        max = sum;
      }
      console.log('max', max, 'sum', sum)
    }
    return max;
  }
  // console.log('expect "10":', maxSubarraySum([1,2,5,2,8,1,5,4], 2));
  // console.log('expect "17":', maxSubarraySum([1,2,5,2,8,1,5], 4));
  // console.log('expect "6":', maxSubarraySum([4,2,1,6], 1));
  console.log('expect "13":', maxSubarraySum([4,2,1,6,2], 4));
  // console.log('expect "null":', maxSubarraySum([], 4));

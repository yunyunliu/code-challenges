/* can be solved using sliding window
given an array of positive integers and a positive integer, determine the minimal
length of a contiguous subarray whose sum is greater than or equal to the integer
if it doesn't exist, return 0
ex:
input: [2,3,1,2,4,3], 7 -> 2 because [4,3] is the smallest subarray with sum >= 7
input: [2,1,6,5,4], 9 -> 2 because [5,4] is the smallest subarray with sum >= 9
input: [3,1,7,33,62,33,18], 52 -> 1 because [62] is the smallest subarray with sum >= 52
input: [1,4,16,22,5,7,8,9,10], 39 -> 3
input: [1,4,16,22,5,7,8,9,10], 95 -> 0 because sum of entire array is less than target
trace 1
[2,3,1,2,4,3] target = 7
[2,3,1,2] <- first window (sum: 8, length: 4)
  [3,1,2,4] <- window 2, (sum: 10, length: 4)
    [1,2,4] <- window 3, (sum: 7, length: 3)
      [2,4,3] <- sum: 9, length: 3
        [4,3] <-sum: 7, length: 2
          [3] <- after 3 array ends, so you can't make any more subarrays that add up to 7
so 2 is the shortest length

trace2
[2,1,6,5,4] target: 9
[2,1,6] <- w1 sum:9 len: 3
  [1,6,5] <- w2 sum:12 len: 3
    [6,5] <- w1 sum:11 len: 2
2 is shortest
each window contains numbers that add up to target or greater
-> find first window,
create variable to store sum of current window initialize to 0
create variable to store length of prev window initialized to same value as minLen since there's nothing to compare it to
then start iterating from i=1 of arr to find next window
  when window2 found aka reach a sum that is >= target
    check if current item >= target
    yes: return 1
    otherwise check if sum + current item >= target
    if yes: compare prev length to number indexes moved aka i - prev length
      prev length > length of current window: assign previous length to length of current window
      otherwise:
    if no: currentSum += currentelement, continue looping

 */

function minSubArrayLen(arr, targetSum) {
  let windowStart = 0;
  let windowEnd = 0;
  let windowSum = 0;
  let minLength = Infinity; // this makes sure that the first Math.min comparison will always choose currentLength

  while (windowStart < arr.length) {
    if (windowEnd < arr.length && windowSum < targetSum) { // have not reached end of window, have not reached end of array
      windowSum += arr[windowEnd];
      windowEnd++; // increase size/length of window;
    } else if (windowSum >= targetSum) { // reached end of window and and have not reached of of array
      const windowLength = windowEnd - windowStart;
      minLength = Math.min(minLength, windowLength); // compare lengths to find new minimum
      windowSum -= arr[windowStart]; // shrink window aka move start index right by 1
      windowStart++;
    } else { // reached end of array and windowSum is less than targetSum
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log('expect 2', minSubArrayLen([2,3,1,2,4,3], 7));
console.log('expect 2', minSubArrayLen([2,1,6,5,4], 9));
console.log('expect 1', minSubArrayLen([3,1,7,33,62,33,18], 52));
console.log('expect 3', minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));
console.log('expect 0', minSubArrayLen([1,4,16,22,5,7,8,9,10], 95));

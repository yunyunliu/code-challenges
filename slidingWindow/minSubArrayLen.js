/* can be solved using sliding window
given an array of positive integers and a positive integer, determine the minimal
length of a contiguous subarray whose sum is greater than or equal to the integer
if it doesn't exist, return 0
ex:
input: [2,3,1,2,4,3], 7 -> 2 because [4,3] is the smallest subarray with sum >= 7
input: [2,1,6,5,4], 9 -> 2 because [5,4] is the smallest subarray with sum >= 9
input: [3,1,7,33,62,33,18], 52 -> 1 because [62] is the smallest subarray with sum >= 52
input: [1,4,16,22,5,7,8,9,10], 39 -> 3
input: [1,4,16,22,5,7,8,9,10], 95 -> 0
 */

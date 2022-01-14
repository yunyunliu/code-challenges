/* can be solved using multiple pointer pattern
'
given a sorted array of integers and a target average, determinee if there is a pair of values
in the array where the average of the pair equals the target average. It's possible for an array
to have more than one pair of integers that meet this condition.
examples:
averagePair([1,2,3], 2.5) // true
averagePair([1,3,3,5,6,7,10,12,19], 8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([], 4) // false

pseudocode:
initialize pointer i at first element of array, pointer j at last element
  loop through array in a while loop: stop looping when there aren't any more lelments to check
  exit condition: i < j, when i = j
    get average of arr[i] and arr[j]
    if avg greater than target: j--
    if avg less than target: i++
*/

function averagePair(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while(i < j) {
    const avg = (arr[i] + arr[j]) / 2;
    if (avg === target) {
      return true;
    }
    if (avg > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

console.log('expect "true"', averagePair([1,2,3], 2.5));
console.log('expect "true"', averagePair([1,3,3,5,6,7,10,12,19], 8));
console.log('expect "false"', averagePair([], 4));

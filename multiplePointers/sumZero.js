// example of the type of problems that can be solved using multiple pointer pattern
// Given a sorted (lowest to highest) array of integers, find the first pair of integers where the sum is 0.
// Return an array containing the pair of integers that meet the condition or undefined if there isn’t one
// ex:
// sumZero([-3,-2,-1,0,1,2,3]) ->  [-3,3]
// sumZero([-2,0,1,3])  -> undefined
// sumZero([1,2,3])  -> undefined

// solution using nested loops with time complexity O(n^2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    const int1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const int2 = arr[j];
      if (int1 + int2 === 0) {
        return [int1, int2];
      }
    }
  }
}

// console.log('sumZero expect "[-3,3]":', sumZero([-3,-2,-1,0,1,2,3]));
// console.log('sumZero expect "undefined":', sumZero([-2,0,1,3]));

// solution using multiple pointer pattern with time complexity O[n]; only works for a sorted list
// uses a while loop and 2 pointers
// space complexity O(1) (constant)
// pseudocode:
// first initialize lower pointer i and higher pointer j starting at first and last indexes of arr
//   loop through array using while loop
//   exit condtion is when there aren't any more elements to check, which is while i < j
//     check if sum of ints at i and j is equal to zero
//       if yes return the 2 ints in an array
//       if the sum of the ints is greater than 0, we want to make the sum lower, do this by decrement j since we now that
//       the element at j-1 has to be lower than the one at j
//       if sum is less than 0, we want to make sum larger by incrementing i, since the int at i++ must be larger than the one at i

function sumZero2(arr) {
  let i = 0;
  let j = arr.length -1;
  while(i < j) {
    const sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i] , arr[j]];
    }
    if (sum > 0) {
      j--; // decrease sum
    } else {
      i++; // increase sum
    }
  }
}


// console.log('sumZero2 expect "[-3,3]":', sumZero2([-3,-2,-2,0,1,2,3]));
// console.log('sumZero2 expect "undefined":', sumZero2([-2,0,1,3]));
console.log('sumZero2 expect "[-2,2]":', sumZero2([-4,-3,-2,-2,0,1,2,10]));

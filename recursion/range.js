// recursive function that accepts a number n and returns the sum of all the numbers
// from 0 to n

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

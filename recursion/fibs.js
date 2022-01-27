// recursive function that accepts a number n and returns the nth number in the fibonacci sequence
// fibonacci sequence: 1, 1, 2, 3, 5, 8....every number after is the sum of the previous 2 numbers

function fib(n) {
  if (n === 1 || n === 2) return 1; // fib sequence starts with 1, not 0
  return fib(n - 1) + fib(n - 2);
}

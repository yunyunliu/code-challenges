// recursive function that accepts a number and returns it's factorial

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

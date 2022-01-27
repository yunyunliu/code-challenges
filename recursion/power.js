// recursive function that accepts a base and an exponent and returns the value of base^exponent

function power(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * power(base, exp - 1);
}

// console.log('expect "1":', power(2, 0))
console.log('expect "9":', power(3, 2))
// console.log('expect "4":', power(2, 1))

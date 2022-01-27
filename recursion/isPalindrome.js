// recursive function that accepts string and returns true is string is a palindrome, otherwise returns false
function reverse(str) {
  if (str.length === 0) return '';
  const last = str[str.length - 1];
  const rest = str.slice(0, -1);
  return last + reverse(rest);
}

function isPalindrome(str) {
  const reversed = reverse(str);
  return reversed === str;
}

// or

function isPalindrome(str) {
  if (str === 1) return true;
  const first = str[0];
  const last = str[str.length - 1];
  const middle = str.slice(1, str.length - 1) // start index of str.slice is inclusive, end index is exclusive
  return (first === last && isPalindrome(middle));
}

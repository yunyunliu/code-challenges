// recursive function that accepts string and returns a new string in reversed order

function reverse(str) {
  if (str.length === 0) return '';
  const last = str[str.length - 1];
  const rest = str.slice(0, -1);
  return last.concat(reverse(rest));
}

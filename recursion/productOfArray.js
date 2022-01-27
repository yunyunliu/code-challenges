// recursive function that accepts an array of numbers and returns their product

function productOfArray(nums) {
  const first = nums[0];
  const rest = nums.slice(1);
  if (nums.length === 1) return first;
  return first * productOfArray(rest);
}

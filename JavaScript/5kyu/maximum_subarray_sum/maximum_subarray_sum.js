function maxSequence(nums) {
  let maxSum = -Infinity;
  let currentSum = 0;

  if (nums.every((n) => n < 0) || !nums.length) {
    return currentSum;
  }

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

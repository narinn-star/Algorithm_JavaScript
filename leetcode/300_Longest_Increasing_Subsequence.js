/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Topics : Array, Binary Search, Dynamic Programming
 *
 * Explanation
 *
 */

const lengthOfLIS = (nums) => {
  let len = nums.length;
  let dp = new Array(len);

  let max = 1;
  for (let i = 0; i < len; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        max = Math.max(max, dp[i]);
      }
    }
  }

  return max;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

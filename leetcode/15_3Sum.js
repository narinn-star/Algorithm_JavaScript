/**
 * Topic: Array, Two Pointers, Sorting
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < len - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = len - 1;

    while (j < k) {
      let total = nums[i] + nums[j] + nums[k];

      if (total > 0) k--;
      else if (total < 0) j++;
      else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;

        while (nums[j] === nums[j - 1] && j < k) j++;
      }
    }
  }

  return res;
};

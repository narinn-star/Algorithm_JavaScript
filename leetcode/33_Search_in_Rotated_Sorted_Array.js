/**
 * Topics: Array, Binary Search
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid;
      else right = mid - 1;
    }
  }

  return -1;
};

/**
 * Topics: Array, Binary Search
 *
 * O(log n) Times -> 이분탐색
 * 가장 작은 값을 찾으러.. 이분탐색 !!
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
};

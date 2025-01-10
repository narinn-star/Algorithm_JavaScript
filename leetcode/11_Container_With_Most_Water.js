/**
 * Topics: Array, Two Pointers, Greedy
 */
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  const length = height.length;
  let max = 0;

  let left = 0;
  let right = length - 1;

  while (right - left > 0) {
    const tmp = height[right] > height[left] ? height[left] : height[right];
    const gap = (right - left) * tmp;

    height[right] > height[left] ? left++ : right--;
    max = max < gap ? gap : max;
  }
};

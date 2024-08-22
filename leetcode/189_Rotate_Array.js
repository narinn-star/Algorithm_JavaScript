/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * Topics : Array, Math, Two Pointers
 *
 * Problem
 * k만큼 rotate시킨 배열 리턴하기
 * 단, 주어진 nums를 활용해야함..
 *
 * Explanation
 *
 */
const rotate = (nums, k) => {
  let len = nums.length;

  k = k % len;

  if (k == len || len == 1) return;

  let arr = nums.slice(len - k);
  arr.push(...nums.slice(0, len - k));

  for (let i = 0; i < len; i++) {
    nums[i] = arr[i];
  }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));

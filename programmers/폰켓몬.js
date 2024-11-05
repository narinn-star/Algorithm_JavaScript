/**
 * Topics: 해시
 *
 */

/**
 *
 * @param {number[]} nums
 * @return {number}
 */

function solution(nums) {
  const len = nums.length / 2;
  const map = {};

  nums.forEach((num) => {
    if (!map[num]) map[num] = 0;
    map[num]++;
  });

  if (Object.values(map).length > len) return len;

  return Object.values(map).length;
}

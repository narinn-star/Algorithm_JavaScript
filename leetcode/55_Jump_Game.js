/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* Topics : Array, Dynamic Programming, Greedy

Explanation
갈 수 있는 거리를 계속 갱신

*/

const canJump = (nums) => {
  const len = nums.length;

  if (len === 1) return true;
  if (nums[0] === 0) return false;

  let reachable = nums[0];
  for (let i = 1; i < len; i++) {
    if (i > reachable) {
      return false;
    }
    if (i + nums[i] > reachable) {
      reachable = i + nums[i];
    }
  }

  return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([1, 0, 1, 1]));
console.log(canJump([1, 0, 1, 0]));

/**
 * Topics: Array, Hash Table
 *
 * 1. Brute Force
 * 2. Hash Table
 *
 * 가장 간단한 방법은 두 가지 수를 더하는 것이기 때문에 모두 돌면서 target이 되는지 확인해보면 된다.
 * Follow-up에 O(n^2) 미만의 시간복잡도로 풀어보라는 게 있어서, 다른 방법도 시도했다.
 * 이분탐색을 시도했지만 되돌아가야하는(?) 경우가 생겨서 해시태이블로 풀었다.
 * 찾는데도 O(1)의 시간이 들고, 반복문도 nums.length만큼만 돌기 때문에 O(n)으로 풀 수 있다.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const twoSum2 = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let tmp = target - nums[i];

    if (map.has(tmp)) return [map.get(tmp), i];

    map.set(nums[i], i);
  }
};

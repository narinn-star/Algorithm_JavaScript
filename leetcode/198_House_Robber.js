/**
 * @param {number[]} nums
 * @return {number}
 */

/* Topics : Array, Dynamic Programming

Explanation
첫번째 집과 두번째 집은 for루프 전에 초기화한다.
첫번째 집은 첫번째 집 값으로, 두번째 집은 1, 2번 둘 중 큰 값으로 초기화한다.

n번째 집에서 탐색할 수 있는 경우는 
1. n - 2번째 집까지의 max 값과 n번째 집의 합
2. n - 1번째 집까지의 max 값

2개 중 더 큰 값을 n에 저장하고, 끝까지 돌고 나서 마지막 값을 반환한다.

*/

const rob = (nums) => {
  let dp = Array(nums.length).fill(0);

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    //
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[nums.length - 1];
};

console.log(rob([2, 7, 9, 3, 1]));

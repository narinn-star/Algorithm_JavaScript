/**
 * Topics: Array, Dynamic Programming
 *
 * dfs로 풀려고 했는데, 토픽이 dp였다.. ㅎ
 * dp가 더 쉽기도 하고 아마 더 빠를거라 딱히 고민없이 dp를 선택했다. 처음에 dp도 고민했는데 주저했던 이유는 계속해서 nums가 바뀌는 탓..? 사실 깊이 생각 안해본 게 맞다..
 *
 * 우선 0을 만들 수 있는 갯수느 1개이므로 1로 초기화해두고 시작한다.
 * 첫번째 for문은 1부터 target까지 돌고, 두번째는 nums 배열 내의 요소들을 하나씩 순회한다.
 * 첫번째 예제로 예를 들면 다음과 같다.
 * dp[1] = 1(1)
 * => dp[1 - 1] = dp[0] = 1
 * dp[2] = 2 (1 + 1, 2)
 * => dp[2 - 1] + dp[2 - 2] = dp[1] + dp[0] = 2
 * dp[3] = 3 (1 + 1 + 1, 1 + 2, 3)
 * => dp[3 - 1] + dp[3 - 2] + dp[3 - 3] = dp[2] + dp[1] + dp[0] = 3
 * dp[4] = 7 (1 + 1 + 1 + 1, 1 + 1 + 2, 1 + 2 + 1, 1 + 3, 2 + 2, 2 + 1 + 1, 3 + 1)
 * => dp[4 - 1] + dp[4 - 2] + dp[4 - 3] = dp[3] + dp[2] + dp[1] = 7
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = (nums, target) => {
  const dp = Array.from({ length: target + 1 }).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (i - num >= 0) {
        dp[i] += dp[i - num];
      }
    }
  }

  return dp[target];
};

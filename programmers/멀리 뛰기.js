/**
 * Topic: 연습문제
 *
 * dp문제!
 */

/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  const dp = Array.from({ length: 2000 }).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

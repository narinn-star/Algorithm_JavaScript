/**
 * Topic: 깊이/너비 우선 탐색(DFS/BFS)
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number}
 */
function solution(numbers, target) {
  let cnt = 0;

  const dfs = (idx, sum) => {
    if (idx === numbers.length) {
      if (sum === target) cnt++;

      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, 0);

  return cnt;
}

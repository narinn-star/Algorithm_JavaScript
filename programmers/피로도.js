/**
 * Topic: 완전탐색
 */
/**
 * @param {number} k
 * @param {number[][]} dungeons
 * @returns {number}
 */
function solution(k, dungeons) {
  let ans = 0;

  const visited = Array.from({ length: dungeons.length }).fill(false);

  const dfs = (need, stage) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= need) {
        visited[i] = true;
        dfs(need - dungeons[i][1], stage + 1);
        visited[i] = false;
      }
    }
    ans = Math.max(answer, stage);
  };

  dfs(k, 0);

  return ans;
}

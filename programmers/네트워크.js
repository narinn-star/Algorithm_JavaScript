/**
 * Topics: 깊이/너비 우선 탐색(DFS/BFS)
 *
 * BFS에 눈 멀어서 문제 제대로 안읽고 4방향 탐색하는 걸로 풀다가 코깨짐..
 * 바보
 */

/**
 *
 * @param {number} n
 * @param {number[][]} computers
 * @returns {number}
 */
const solution = (n, computers) => {
  const visited = Array(n).fill(false);
  const queue = [];

  let cnt = 0;

  const bfs = (start) => {
    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      const cur = queue.shift();

      for (let i = 0; i < n; i++) {
        if (computers[cur][i] === 1 && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      cnt++;
    }
  }

  return cnt;
};

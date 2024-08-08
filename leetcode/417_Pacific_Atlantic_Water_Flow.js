/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

/**
 * Topics : Array, Depth-First Search, Breadth-First Search, Matrix
 *
 * Explanation
 *
 */

const pacificAtlantic = (heights) => {
  if (!heights || heights.length === 0) return [];

  const m = heights.length;
  const n = heights[0].length;

  const pacific = Array.from({ length: m }, () => Array(n).fill(false));
  const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = (x, y, visited) => {
    visited[x][y] = true;
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < m &&
        ny >= 0 &&
        ny < n &&
        !visited[nx][ny] &&
        heights[nx][ny] >= heights[x][y]
      ) {
        dfs(nx, ny, visited);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) dfs(i, j, pacific); // 태평양 경계
      if (i === m - 1 || j === n - 1) dfs(i, j, atlantic); // 대서양 경계
    }
  }

  const result = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);

// 왜 0,0 은 안돼 ..? 바로 태평양으로 갈 수 있는 거 아닌가 ㅠㅠ 나머지도 다 .. 2,4도 바로 대서양 갈 수 있는거 아닌가 ㅇㅎ

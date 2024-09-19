/**
 * Topics : 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 *
 * 처음에 cnt를 매개변수로 같이 넘겨서 쌓아줬는데 왜 안되지 잘. ... ㅠㅠ 그래서 단지 번호 붙이기문제 풀었던 것처럼
 * 내부에서 cnt 초기화해주고 cnt에 dfs 반환값을 계속 더해줬다.
 *
 * trash에 값을 더해주면서 마지막 호출되는 인덱스 값을 가져오려고 했는데, 그것보단 그냥 cnt 축적해주는 게 나을 것 같아서
 * 다 지웠슴.. ㅎ
 *
 * bfs는 진짜 쉽게 느껴지는데 dfs로만 풀면 이렇게 버벅인다🫠
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const [N, M, K] = input.shift();
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const trash = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
  const visited = Array.from(Array(N + 1), () => Array(M + 1).fill(null));

  input.forEach(([x, y]) => {
    trash[x][y] = 1;
  });

  const dfs = (x, y) => {
    if (visited[x][y]) return 0;

    visited[x][y] = true;
    let cnt = 1;

    for (let i = 0; i < 4; i++) {
      const X = x + dx[i];
      const Y = y + dy[i];

      if (X >= 1 && Y >= 1 && X <= N && Y <= M) {
        if (!visited[X][Y] && trash[X][Y] !== 0) {
          cnt += dfs(X, Y);
        }
      }
    }

    return cnt;
  };

  let max = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (!visited[i][j] && trash[i][j] === 1) {
        const cnt = dfs(i, j);
        max = Math.max(max, cnt);
      }
    }
  }

  console.log(max);
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  solution(input);
  process.exit();
});

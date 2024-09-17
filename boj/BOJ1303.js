/**
 * Topics : 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 *
 * 오..  드디어 dfs를 혼자서 완벽히, 자바스크립트로 풀었다. count를 리턴하는 부분에서 조금 버벅이긴 했지만
 * 전역변수로 cnt를 놔뒀는데 왜인지 계속 NaN이 떴다.. 스코프에 대해서 다시 정확하게 공부해야함🫠
 * N, M이 다른 문제들과 달리 반대로 되어 있어서 긴가민가 했는데, 이것도 더 확실하게 해둘 필요가 있어서 익혀뒀다.
 * 그리고 굳이 calc 함수는 필요 없어보이기도 하구 ..
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (N, M, input) => {
  const army = input.map((i) => i.split(''));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let whiteCnt = 0;
  let blueCnt = 0;

  const visited = army.map((i) => i.map(() => false));

  const dfs = (x, y, team) => {
    if (visited[x][y]) return 0;

    visited[x][y] = true;
    let count = 1;

    for (let i = 0; i < 4; i++) {
      let X = x + dx[i];
      let Y = y + dy[i];

      if (X < M && Y < N && X >= 0 && Y >= 0) {
        if (!visited[X][Y] && army[X][Y] === team) {
          count += dfs(X, Y, team);
        }
      }
    }

    return count;
  };

  const calc = (team, cnt) => {
    if (team === 'W') {
      whiteCnt += cnt * cnt;
    } else {
      blueCnt += cnt * cnt;
    }
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) continue;
      const count = dfs(i, j, army[i][j]);
      calc(army[i][j], count);
    }
  }

  console.log(whiteCnt, blueCnt);
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [N, M] = input.shift().split(' ').map(Number);
  solution(N, M, input);
  process.exit();
});

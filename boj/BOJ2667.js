/**
 * Topics: 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 *
 * 도대체 왜 안되는지 모르겠음...
 * 로직은 전혀 틀린 게 없고, 자바스크립트로 문제를 푼 사람들 중 해법을 알려주는 사람도 너무 없음..
 *
 * 상하좌우도 다 탐색했고, 방문 처리도 해줬고 갯수도 잘 세어줬음.. 예제도 잘 나온단말이지
 * 근데 안돼요... ㅠㅠ 질문 게시판에 가도 node.js로 푼 거에 대한 답변이 거의 없어서 도움받지 못했다😭
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (map) => {
  const N = map.shift()[0];
  const visited = Array.from(Array(N), () => Array(N).fill(false));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let count_home = 0;
  const res = [];

  const dfs = (x, y) => {
    if (map[x][y] === 1 && !visited[x][y]) {
      visited[x][y] = true;
      count_home++;

      for (let i = 0; i < 4; i++) {
        const X = x + dx[i];
        const Y = y + dy[i];

        if (X >= 0 && Y >= 0 && X < N && Y < N) {
          dfs(X, Y);
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
        res.push(count_home);
        count_home = 0;
      }
    }
  }

  res.sort((a, b) => a - b);

  console.log(res.length);
  console.log(res.join('\n'));
};

rl.on('line', function (line) {
  input.push(line.split('').map(Number));
}).on('close', function () {
  solution(input);
  process.exit();
});

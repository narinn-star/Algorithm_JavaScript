/**
 * Topics: 그래프 이론, 그래프 탐색, 너비 우선 탐색, 깊이 우선 탐색
 *
 * 무슨 입력값 배열에 넣는게 더 어려워 .. ㅠㅠ
 * 자바스크립트로 풀이할 때 배열 선언하고 마음대로 값 집어넣기가 제일 어렵다.
 *
 * 배열, 스코프 부분 복습 꼭 하기,,🫠
 *
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const C = Number(input.shift());
  const P = Number(input.shift());

  const graph = Array.from({ length: C + 1 }, () => []);
  const visited = Array.from({ length: C + 1 }).fill(false);

  for (let i = 0; i < P; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  let cnt = 0;
  const dfs = (start) => {
    visited[start] = true;
    cnt++;
    for (const end of graph[start]) {
      if (!visited[end]) dfs(end);
    }
  };

  dfs(1);

  console.log(cnt - 1);
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

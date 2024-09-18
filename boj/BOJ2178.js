/**
 * Topics : 그래프 이론, 그래프 탐색, 너비 우선 탐색
 *
 * 재귀 호출은 정말 어려웠는데, BFS는 함수 호출 필요도 없이 다 해결할 수 있어서 깔끔했다.
 * 자바로 풀 때는 그래프 문제가 입력받기가 너무 까다로워서 코드가 길어졌는데 js로 푸니 입력에서 복잡한 건 다 없어져서 좋은 듯.
 * 요즘 계속 dfs를 연습 중이라, bfs로 풀지 않고 dfs로 풀고 있는데 이 문제도 바로 그냥 dfs로 풀다가 두 번째 예제를 보고서야 '최소 칸'인 걸 떠올리고
 * bfs로 다시 고쳤다. 이번 dfs/bfs 풀이 다음에는 다시 안해도 될 정도로 마스터해야징
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (N, M, input) => {
  const map = input.map((i) => i.split('').map(Number));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let queue = [];
  queue.push([0, 0]);

  while (queue.length) {
    const [qX, qY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const X = qX + dx[i];
      const Y = qY + dy[i];

      if (X >= 0 && Y >= 0 && X < N && Y < M) {
        if (map[X][Y] === 1) {
          map[X][Y] = map[qX][qY] + 1;
          queue.push([X, Y]);
        }
      }
    }
  }

  console.log(map[N - 1][M - 1]);
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [N, M] = input.shift().split(' ').map(Number);
  solution(N, M, input);
  process.exit();
});

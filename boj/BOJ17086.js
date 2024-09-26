/**
 * Topics: 그래프 이론, 브루트포스 알고리즘, 그래프 탐색, 너비 우선 탐색
 *
 * 로직은 엄청 빠르게 떠올렸다. 이전에 풀었던 BFS문제와 다른 점은 4방향이 아니라 8방향이라는 것
 * 그리고 상어가 있는 좌표를 큐에 미리 넣어두고 bfs를 돌리는 것 이렇게 두가지뿐이다.
 *
 * 미리 상어 좌표를 큐에 넣지 않고 while문 밖에서 shark 배열에 좌표 넣어두고 (이중 for문 실행 1)
 * shark 배열을 돌면서 bfs 호출하고 (for문 실행 2) while 내부에서 shark 자리라면 continue시키고..
 * 마지막에 또 max값 찾아내고
 *
 * 이렇게 했더니 시간초과 뜸..
 *
 * 그래서 상어 좌표 미리 다 넣어두고 bfs 호출은 한 번만 하고, 내부에서 상어 좌표도 다 확인한 후에 값만 +1 해줬다.
 * 처음에 상어 자리가 1로 초기화되어 있기 때문에 출력할 때 -1해서 출력하면 된다.
 *
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (N, M, map) => {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
  const queue = [];

  const bfs = () => {
    while (queue.length) {
      const [qX, qY] = queue.shift();

      for (let i = 0; i < 8; i++) {
        const X = qX + dx[i];
        const Y = qY + dy[i];

        if (X < 0 || Y < 0 || X >= N || Y >= M || map[X][Y]) continue;

        map[X][Y] = map[qX][qY] + 1;
        queue.push([X, Y]);
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1) queue.push([i, j]);
    }
  }

  bfs();

  console.log(Math.max(...map.flat()) - 1);
};

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  const [N, M] = input.shift();
  solution(N, M, input);
  process.exit();
});

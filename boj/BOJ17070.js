/**
 * Topics : 다이나믹 프로그래밍, 그래프 이론, 그래프 탐색
 *
 * 릿코드 풀어왔던 게 정말 많이 도움이 됐다고 처음 느꼈다. 릿코드에서 ListNode를 많이 다루면서 나도 모르게(?) dfs를 많이 쓰고 있었는데
 * 그게 갑자기 생각나서 풀어져버린 🫠
 *
 * 원래 처음엔 dfs 함수 하나가 아니라 가로/세로/대각 모두 다른 세 함수로 선언했는데 함수 호출하는게 너무 비효율?적이기도 하고,
 * 계속 오류가 나서 dfs에 하나로 다 합치면서 0, 1, 2로 방향을 같이 넘겨줬다.
 *
 * dfs 한 번(?)이 끝나면 즉, [N-1,N-1]에 도달했으면 한 가지 방법이 나온 것이므로 그 때 count를 더해주고,
 * 모든 재귀가 다 돌고 나면 알아서 dfs는 탈출되며, 그 때의 count값이 모든 경로의 경우의 수를 합한 값이 된다.
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (N, map) => {
  let count = 0;

  const dfs = (x, y, dir) => {
    if (x === N - 1 && y === N - 1) {
      count++;
      return;
    }

    // 가로
    if (dir === 0 || dir === 2) {
      if (y + 1 < N && map[x][y + 1] === 0) {
        dfs(x, y + 1, 0);
      }
    }

    // 세로
    if (dir === 1 || dir === 2) {
      if (x + 1 < N && map[x + 1][y] === 0) {
        dfs(x + 1, y, 1);
      }
    }

    // 대각
    if (
      x + 1 < N &&
      y + 1 < N &&
      map[x + 1][y] === 0 &&
      map[x][y + 1] === 0 &&
      map[x + 1][y + 1] === 0
    ) {
      dfs(x + 1, y + 1, 2);
    }
  };

  dfs(0, 1, 0);

  console.log(count);
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  const N = Number(input.shift());
  const map = input;
  solution(N, map);
  process.exit();
});

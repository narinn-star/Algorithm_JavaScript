/**
 * Topics : 다이나믹 프로그래밍
 *
 * ❗️javascript
 * - Number는 2^53까지, 그 이상은 BigInt 사용
 * - 출력할 때는 n을 빼기 위해서 toString() 사용
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (N, board) => {
  const dp = Array.from({ length: N }, () => Array(N).fill(BigInt(0)));

  dp[0][0] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (dp[i][j] === 0 || (i === N - 1 && j === N - 1)) continue;

      const num = board[i][j];
      const x = i + num;
      const y = j + num;

      if (x < N) dp[x][j] += BigInt(dp[i][j]);
      if (y < N) dp[i][y] += BigInt(dp[i][j]);
    }
  }

  console.log(dp[N - 1][N - 1].toString());
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  const N = Number(input.shift());
  solution(N, input);
  process.exit();
});

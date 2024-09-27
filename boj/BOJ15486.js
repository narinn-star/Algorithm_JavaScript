/**
 * Topics : 다이나믹 프로그래밍
 *
 *
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (N, plan) => {
  const dp = Array.from({ length: N + 1 }).fill(0);

  for (let i = 0; i < N; i++) {
    if (i + plan[i][0] <= N) {
      dp[i + plan[i][0]] = Math.max(dp[i + plan[i][0]], dp[i] + plan[i][1]);
    }

    dp[i + 1] = Math.max(dp[i + 1], dp[i]);
  }

  console.log(dp[N]);
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  const N = Number(input.shift());
  solution(N, input);
  process.exit();
});

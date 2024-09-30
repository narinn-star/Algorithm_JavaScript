/**
 * Topics : 다이나믹 프로그래밍
 *
 * 어제에 이어 이것도 이차원 배열을 이용하는 문제다.
 * 그냥 대충 찍었는데 이게 되는..ㅎ
 * 더한 값과 빼는 값을 모두 가지고 있어야하는 게 포인트라 생각해서 계속 써봤는데, 값이 계속 많아져서
 * 이차원배열에 모두 담아버리자 해서 무작정 만들었다.
 * 첫 값은 dp[0][S]에 1을 담아두고, 더한 값과 뺀 값에 해당하는 배열에 값을 계속 쌓아줬다.
 *
 * 근데 이게 .. 되네? 😅
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (inputs) => {
  const [N, S, M] = inputs.shift();
  const volume = [0, ...inputs.shift()];

  const dp = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  dp[0][S] = 1;

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      if (dp[i - 1][j] > 0) {
        const pos = j + volume[i];
        const neg = j - volume[i];

        if (pos <= M) dp[i][pos] += dp[i - 1][j];
        if (neg >= 0) dp[i][neg] += dp[i - 1][j];
      }
    }
  }

  let max = -1;

  for (let i = 0; i <= M; i++) {
    if (dp[N][i] > 0) {
      max = Math.max(max, i);
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

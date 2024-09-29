/**
 * Topics : 다이나믹 프로그래밍
 *
 * 1시간 40분동안 뚫어져라 보다가 결국 못풀어서 다른 풀이를 검색했다.
 *
 * 2차원 배열을 생각해내는게 포인트인 듯 한데, 진짜 한 순간도 이차원 배열을 떠올리지 못함..
 * 계속 1+1+1... 이거 쓰고 방정식 써보고 했는데 접근조차 잘못됐음을 알았고 약간의 절망감도 맛봤다🤯
 *
 * 사실 완전히 이해하지 못함.. 😅
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (T, N) => {
  const dp = Array.from({ length: 10001 }, () => Array(4).fill(0));

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i][j] = 1;
    }
  }

  for (let i = 4; i <= 10000; i++) {
    dp[i][1] = dp[i - 1][1];
    dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
    dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
  }

  for (let t = 0; t < T; t++) {
    let n = input.shift();

    console.log(dp[n][1] + dp[n][2] + dp[n][3]);
  }
};

rl.on('line', function (line) {
  input.push(+line);
}).on('close', function () {
  const T = input.shift();
  solution(T, input);
  process.exit();
});

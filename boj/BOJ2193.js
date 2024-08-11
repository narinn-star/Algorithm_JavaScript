const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

const solution = (N) => {
  let dp = [];
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= N; i++) {
    dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
  }

  return String(dp[N]);
};

rl.on('line', function (line) {
  N = +line;
  rl.close();
}).on('close', function () {
  console.log(solution(N));
  process.exit();
});

/* Topics : 다이나믹 프로그래밍

Explanation
그냥 하나씩 붙여가려 했는데, 내 머리가 먼저 터질 것 같아서 그만뒀음.. 길이 자르는게 너무 어려웠어 ㅇㅅㅇ..
피보나치 규칙을 찾아서 디피로 풀었다.
N이 90일 때 값이 너-무 커져서 BigInt를 써줬고 (넘는지 안넘는지 내가 우케아냐고 ..... 예제라도 주지 ㅠ)
BigInt를 쓰면 뒤에 n이 붙어서 String으로 변환해줘야 출력했을 때 정상적인 값이 나오게 된다.

*/

/**
 * Topics : 다이나믹 프로그래밍
 *
 * 동전 1보다 훨씬 쉬웠다. 전형적인 dp와 점화식이 비슷했음.
 *
 * 적자면 아래와 같다.
 *      1   2   3   4   5   6   7   8   9   10  11  12  13  14  15
 *  1   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15
 *  5   0   0   0   0   1   2   3   4   5   2   3   4   5   6   3
 *  12  0   0   0   0   0   0   0   0   0   0   0   1   2   3   4
 *  min 1   2   3   4   1   2   3   4   5   2   3   1   2   3   3
 *
 * 처음에 100001로 초기화했기 때문에 dp[k]가 100001이라는 것은 최솟값을 구하지 못했다. 즉, 만들 수 없는 수라는 것이므로 -1을 출력한다.
 * 점화식이 dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)인데, 처음엔 +1이 아니고 dp[coins[i]]로 뒀다. 그런데 초기화되기 전에 값이 들어가서인지
 * 계속 오류가 났고, 어차피 dp[coins[i]]의 값은 언제나 1일 것이므로 +1로 바꿔 숫자가 계산될 수 있도록 했다.
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const [n, k] = input[0].split(' ').map(Number);
  const coins = input.map(Number);

  let dp = Array.from({ length: k + 1 }).fill(100001);

  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = coins[i]; j <= k; j++) {
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }

  console.log(dp[k] === 100001 ? -1 : dp[k]);
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

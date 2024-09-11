/**
 * Topics : 다이나믹 프로그래밍
 *
 * 자바스크립트로 풀면 메모리 초과로 인해 성공은 절대 할 수 없지만.. 다른 언어로 푼 거랑 비교해보니 로직이 완전히 같아서 맞다고 쳤다.. 아니 맞음
 *
 * dp인 것은 처음부터 알았는데 계속 1부터 10까지 돌면서 차례로 쌓아가려고 하다 보니, 규칙을 너무 좁게 찾으려 한 것임을 깨달았다.
 * 거의 한 시간 반동안 했는데 못찾아서 다른 분의 풀이를 봤다.
 *
 * dp[0]을 1로 초기화하는 이유는 dp[1] = dp[1] + dp[1 - 1원]일 때 0이 나오기 때문이다. 자기 자신을 뺐을 때는 무조건 1이 나와야하기 때문에 dp[0]에 1을 넣어둔다.
 * 그리고 동전을 하나씩 보면서 모든 가짓수를 세어준다. (이게 생각의 전환점인 듯.. 나는 모든 동전을 한 번에 보면서 k까지 보려고 했음)
 * 1원으로 1원부터 10원까지 만들 수 있는 각각의 경우의 수를 dp[i] = dp[i] + dp[i - x원] 점화식으로 계산해주면 끝
 *
 * dp는 항상 이래.. 어려운 듯 보이지만 풀고나면 아무것도 아닌 🤯
 *
 * 아래 표(?)를 참고하면 이해하기가 더 쉽다.
 *
 *      1   2   3   4   5   6   7   8   9   10
 *  1   1   1   1   1   1   1   1   1   1   1
 *  2   0   1   1   2   2   3   3   4   4   5
 *  5   0   0   0   0   1   1   2   2   3   4
 *  dp  1   2   2   3   4   5   6   7   8   10
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
  let dp = Array.from({ length: k + 1 }).fill(0);

  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = coins[i]; j <= k; j++) {
      dp[j] = dp[j] + dp[j - coins[i]];
    }
  }

  console.log(dp[k]);
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

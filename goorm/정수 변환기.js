// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null,
    K = null;
  let S = '';

  for await (const line of rl) {
    if (!N) {
      [N, K] = line.split(' ').map(Number);
    } else {
      S = line.split('').map(Number);
      rl.close();
    }
  }
  solution(N, K, S);
  process.exit();
})();

const solution = (N, K, S) => {
  let res = '';
  for (let i = 0; i < N; i++) {
    S[i] = S[i] + K;
    res += S[i];
  }

  console.log(res);
};

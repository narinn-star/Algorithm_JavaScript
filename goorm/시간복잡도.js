// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;

  for await (const line of rl) {
    if (!N) N = +line;

    rl.close();
  }
  console.log(solution(N));
  process.exit();
})();

const solution = (N) => {
  let cnt = 0;
  while (N >= 5) {
    cnt += N / 5;
    N /= 5;
  }

  return Math.ceil(cnt);
};

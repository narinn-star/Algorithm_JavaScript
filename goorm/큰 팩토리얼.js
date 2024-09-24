// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  for await (const line of rl) {
    N = Number(line);
    rl.close();
  }

  let sum = 1;

  for (let i = 1; i <= N; i++) {
    sum = (sum * i) % 1000000007;
  }

  console.log(sum);
  process.exit();
})();

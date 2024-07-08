// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;

  for await (const line of rl) {
    if (!N) N = +line;
    rl.close();
  }

  solution(N);
  process.exit();
})();

const solution = (N) => {
  for (let i = N; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      process.stdout.write('*');
    }
    console.log();
  }
};

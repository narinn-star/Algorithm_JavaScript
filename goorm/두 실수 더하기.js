// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let A = null,
    B = null;

  for await (const line of rl) {
    [A, B] = line.split(' ').map(Number);
    rl.close();
  }
  solution(A, B);
  process.exit();
})();

const solution = (A, B) => {
  console.log((A + B).toFixed(6));
};

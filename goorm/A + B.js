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
  console.log(A + B);
  process.exit();
})();

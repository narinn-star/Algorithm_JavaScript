// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let A = null;
  let B = null;

  for await (const line of rl) {
    if (!A) {
      A = line;
    } else {
      B = line;
      console.log(A + B);
      console.log(Number(A) + Number(B));
      rl.close();
    }
  }
  process.exit();
})();

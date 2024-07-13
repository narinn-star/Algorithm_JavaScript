// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let A = null,
    B = null;

  for await (const line of rl) {
    if (!N) N = +line;
    else {
    }

    rl.close();
  }

  process.exit();
})();

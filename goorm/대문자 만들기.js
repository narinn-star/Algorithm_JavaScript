// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let str = '';

  for await (const line of rl) {
    if (!N) N = +line;
    else str = line.toUpperCase();
    rl.close();
  }
  console.log(str);
  process.exit();
})();

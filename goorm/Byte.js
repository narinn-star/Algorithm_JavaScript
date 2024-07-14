// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    let S = line;
    console.log(line.length);
    rl.close();
  }

  process.exit();
})();

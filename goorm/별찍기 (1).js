// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  for await (const line of rl) {
    if (!N) N = +line;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j <= i; j++) {
        process.stdout.write('*');
      }
      console.log();
    }

    rl.close();
  }

  process.exit();
})();

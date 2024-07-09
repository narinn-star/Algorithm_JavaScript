// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;

  for await (const line of rl) {
    if (!N) N = +line;
    rl.close();
  }

  console.log(N.toString(2)); // 10 -> 2진수
  //console.log(N.toString(8)); // 10 -> 8진수
  //console.log(N.toString(16)); / 10 -> 16진수
  process.exit();
})();

// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;

  for await (const line of rl) {
    N = +line;
    rl.close();
  }

  let cnt = 0;

  while (true) {
    if (N === 0) {
      console.log(cnt);
      return;
    }

    if (N >= 40) N -= 40;
    else if (N >= 20) N -= 20;
    else if (N >= 10) N -= 10;
    else if (N >= 5) N -= 5;
    else if (N >= 1) N -= 1;

    cnt++;
  }

  console.log(cnt);
  process.exit();
})();

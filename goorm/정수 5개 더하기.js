// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let arr = [];
  let sum = 0;
  for await (const line of rl) {
    if (arr.length === 0) {
      arr = line.split(' ').map(Number);
    }

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
    rl.close();
  }

  process.exit();
})();

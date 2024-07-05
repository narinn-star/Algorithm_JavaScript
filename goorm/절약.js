// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let cnt = 0;
  let inCnt = 0;
  let outCnt = 0;

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      let [info, amount] = line.split(' ');
      amount = +amount;
      if (info === 'in') inCnt += amount;
      else outCnt += amount;

      if (inCnt - outCnt < 0) {
        console.log('fail');
        process.exit();
      }

      cnt++;
    }

    if (cnt === N) {
      if (inCnt - outCnt >= 0) console.log('success');
      else console.log('fail');
      rl.close();
    }
  }

  process.exit();
})();

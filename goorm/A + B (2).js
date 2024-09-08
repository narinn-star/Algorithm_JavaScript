// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let A;
  let B;

  for await (const line of rl) {
    [A, B] = line.split(' ').map(Number);
    rl.close();
  }
  console.log((A + B).toFixed(6));
  process.exit();
})();

/**
 * Topic: 프로그래밍
 *
 * ✔️ javascript
 * 소수점 자리 : toFixed()함수 사용
 */

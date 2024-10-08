/**
 * Topics: 프로그래밍
 *
 * split, join, sort, set, spread operator
 */

// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let numbers = [];
  for await (const line of rl) {
    if (N === null) N = +line;
    else {
      numbers = line.split(' ').map(Number);
      rl.close();
    }
  }
  const numSet = [...new Set(numbers)];
  console.log(numSet.sort((a, b) => a - b).join(' '));
  process.exit();
})();

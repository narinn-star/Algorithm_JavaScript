// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null,
    c = null;
  let timestamp = [];
  for await (const line of rl) {
    if (!N) {
      [N, c] = line.split(' ').map(Number);
    } else {
      timestamp = line.split(' ').map(Number);
      rl.close();
    }
  }

  solution(c, timestamp);
  process.exit();
})();

const solution = (c, timestamp) => {
  let idx = 0;
  for (let i = 1; i < timestamp.length; i++) {
    if (timestamp[i] - timestamp[i - 1] > c) idx = i;
  }

  let cnt = 0;
  for (let i = idx; i < timestamp.length; i++) {
    cnt++;
  }
  console.log(cnt);
};

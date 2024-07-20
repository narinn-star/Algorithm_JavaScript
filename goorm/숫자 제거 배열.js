// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null,
    K = null;
  let arr = [];

  for await (const line of rl) {
    if (!N) {
      [N, K] = line.split(' ').map(Number);
    } else {
      arr = line.split(' ').map(Number);
      rl.close();
    }
  }
  solution(K, arr);
  process.exit();
})();

const solution = (K, arr) => {
  let cnt = 0;
  arr.forEach((v) => {
    if (!v.toString().includes(K)) cnt++;
  });
  console.log(cnt);
};

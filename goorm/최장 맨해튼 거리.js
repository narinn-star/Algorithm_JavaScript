// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let a, b, c, d;

  for await (const line of rl) {
    [a, b, c, d] = line.split(' ').map(Number);
    rl.close();
  }

  solution(a, b, c, d);
  process.exit();
})();

const solution = (a, b, c, d) => {
  let arr = [a, b, c, d];
  arr.sort((a, b) => a - b);
  console.log(Math.abs(arr[0] - arr[2]) + Math.abs(arr[1] - arr[3]));
};

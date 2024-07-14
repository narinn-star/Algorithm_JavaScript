// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let T = null;
  let arr = [];

  for await (const line of rl) {
    if (!T) T = +line;
    else {
      arr.push(line.split(' ').map(Number));
      if (arr.length === T) rl.close();
    }
  }
  solution(arr);
  process.exit();
})();

const solution = (arr) => {
  let max = 0;
  arr.forEach((v) => {
    let [w, h] = v;
    max = Math.max(max, w * h);
  });
  console.log(max);
};

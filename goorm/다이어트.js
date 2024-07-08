// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let W, N;
  let arr = [];

  for await (const line of rl) {
    if (!W) {
      [W, N] = line.split(' ').map(Number);
    } else {
      arr.push(line.split(' ').map(Number));
      if (arr.length === N) rl.close();
    }
  }

  console.log(solution(W, arr));

  process.exit();
})();

const solution = (w, arr) => {
  arr.forEach((v) => {
    let [c, e] = v;
    if (c > e && w + 1 <= 80) w++;
    else if (c < e && w - 1 >= 10) w--;
  });

  return w;
};

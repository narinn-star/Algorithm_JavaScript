// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let arr = [];

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      arr.push(line.split(' ').map(Number));
      if (arr.length === N) rl.close();
    }
  }
  solution(arr);
  process.exit();
})();

const solution = (arr) => {
  arr.forEach((v) => {
    let [a, b] = v;
    console.log(a + b);
  });
};

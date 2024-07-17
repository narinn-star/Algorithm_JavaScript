// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let str = '';

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      str = line;
      rl.close();
    }
  }

  solution(N, str);
  process.exit();
})();

const solution = (N, str) => {
  let score = 1;
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'X') {
      score = 1;
    } else {
      res += score;
      score++;
    }
  }

  console.log(res);
};

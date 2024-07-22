// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let S = [];

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      S = line.split('');
      rl.close();
    }
  }

  solution(S);
  process.exit();
})();

const solution = (S) => {
  let res = '';

  S.forEach((v) => {
    if (v === v.toUpperCase()) {
      res = v.toLowerCase();
    } else if (v === v.toLowerCase()) {
      res = v.toUpperCase();
    }
  });

  console.log(res);
};

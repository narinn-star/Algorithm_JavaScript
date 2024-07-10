// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let str = null;

  for await (const line of rl) {
    if (!N) {
      N = +line;
    } else {
      str = line;
      rl.close();
    }
  }

  solution(str);
  process.exit();
})();

const solution = (str) => {
  let cnt = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      continue;
    } else {
      cnt++;
    }
  }
  console.log(cnt);
};

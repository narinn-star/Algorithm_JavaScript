// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let stick = [];

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      stick.push(+line);

      if (stick.length === N) rl.close();
    }
  }
  solution(stick);
  process.exit();
})();

const solution = (stick) => {
  let front = stick[stick.length - 1];
  let cnt = 1;

  for (let i = stick.length - 1; i >= 0; i--) {
    if (front < stick[i]) {
      front = stick[i];
      cnt++;
    }
  }
  console.log(cnt);
};

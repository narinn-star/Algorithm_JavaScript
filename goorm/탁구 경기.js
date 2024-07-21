// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let arr = [];

  for await (const line of rl) {
    if (!N) {
      N = +line;
    } else {
      arr.push(line);
      if (arr.length === N) rl.close();
    }
  }

  solution(N, arr);
  process.exit();
})();

const solution = (N, arr) => {
  let dCnt = 0,
    pCnt = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] === 'D') {
      dCnt++;
    } else if (arr[i] === 'P') pCnt++;

    if (dCnt >= pCnt + 2 || pCnt >= dCnt + 2) {
      break;
    }
  }

  console.log(`${dCnt}:${pCnt}`);
};

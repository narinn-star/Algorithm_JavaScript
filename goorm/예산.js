// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let M = null;
  let buyList = [];

  for await (const line of rl) {
    if (!N) {
      [N, M] = line.split(' ').map(Number);
    } else {
      buyList.push(line.split(' ').map(Number));
      if (buyList.length === N) rl.close();
    }
  }
  solution(M, buyList);
  process.exit();
})();

const solution = (M, buyList) => {
  buyList.forEach((val) => {
    let [c, v] = val;

    M -= c * v;
  });

  if (M < 0) console.log('No');
  else console.log(M);
};

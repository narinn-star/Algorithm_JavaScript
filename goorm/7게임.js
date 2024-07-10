// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let numList = [];
  for await (const line of rl) {
    numList.push(line.split('').map(Number));
    if (numList.length == 5) rl.close();
  }

  solution(numList);
  process.exit();
})();

const solution = (numList) => {
  numList.forEach((list) => {
    let sum = 0;
    let mul = 1;
    list.forEach((val, idx) => {
      if (idx % 2 == 0) {
        sum += val;
      } else if (idx % 2 == 1 && val !== 0) {
        mul *= val;
      }
    });
    console.log((sum * mul) % 10);
  });
};

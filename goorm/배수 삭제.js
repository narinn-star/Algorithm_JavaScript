// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null,
    K = null;
  let nums = null;

  for await (const line of rl) {
    if (!N) {
      [N, K] = line.split(' ').map(Number);
    } else {
      nums = line.split(' ').map(Number);
      rl.close();
    }
  }

  solution(K, nums);

  process.exit();
})();

const solution = (K, nums) => {
  let sum = 0;

  nums.forEach((num) => {
    if (num % K !== 0) sum += num;
  });

  console.log(sum);
};

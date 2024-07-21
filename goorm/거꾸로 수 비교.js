// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let A = null,
    B = null;
  for await (const line of rl) {
    [A, B] = line.split(' ');
    rl.close();
  }

  solution(A, B);
  process.exit();
})();

const solution = (A, B) => {
  let arrA = A.split('').reverse().join('');
  let arrB = B.split('').reverse().join('');

  console.log(arrA > arrB ? A : B);
};

// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let A = null,
    B = null;

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      [A, B] = line.split(' ');
      rl.close();
    }
  }

  solution(N, A, B);
  process.exit();
})();

const solution = (N, A, B) => {
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < N; j++) {
      if ((i * j) % 2 === 0) {
        process.write(B, ' ');
      } else {
        process.write(A, ' ');
      }
    }
  }
};

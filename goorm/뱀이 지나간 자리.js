// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null,
    M = null;

  for await (const line of rl) {
    [N, M] = line.split(' ').map(Number);
    rl.close();
  }

  solution(N, M);
  process.exit();
})();

const solution = (N, M) => {
  let right = true;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i % 2 === 0) process.stdout.write('#');
      else {
        if (right) {
          if (j === M - 1) {
            process.stdout.write('#');
            right = !right;
            continue;
          } else process.stdout.write('.');
        }
        if (!right) {
          if (j === 0) {
            process.stdout.write('#');
          } else {
            process.stdout.write('.');
            if (j === M - 1) right = !right;
          }
        }
      }
    }
    console.log();
  }
};

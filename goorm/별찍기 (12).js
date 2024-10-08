// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;

  for await (const line of rl) {
    if (N === null) N = +line;
    else rl.close();
  }

  solution(N);

  process.exit();
})();

const solution = (N) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      process.stdout.write(' ');
    }
    for (let j = 0; j <= i; j++) {
      process.stdout.write('*');
    }
    console.log();
  }

  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(' ');
    }
    for (let j = i + 1; j < N; j++) {
      process.stdout.write('*');
    }
    console.log();
  }
};

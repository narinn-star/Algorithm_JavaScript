const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;

  for await (const line of rl) {
    N = line;
    rl.close();
  }
  solution(N);
  process.exit();
})();

const solution = (N) => {
  console.log(N.length);
};

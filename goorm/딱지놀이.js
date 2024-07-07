// Run by Node.js
const readline = require('readline');

const solution = (a, b) => {
  a.shift();
  b.shift();
  a = a.sort((a1, a2) => {
    return a2 - a1;
  });
  b = b.sort((b1, b2) => {
    return b2 - b1;
  });

  while (a.length !== 0 && b.length !== 0) {
    let tmpA = a.shift();
    let tmpB = b.shift();

    if (tmpA > tmpB) {
      console.log('A');
      return;
    } else if (tmpA < tmpB) {
      console.log('B');
      return;
    } else {
      continue;
    }
  }

  if (a.length === 0 && b.length === 0) {
    console.log('D');
  } else if (a.length > 0) console.log('A');
  else if (b.length > 0) console.log('B');
};

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let cnt = 0;
  let a, b;

  for await (const line of rl) {
    if (!N) N = +line;
    else {
      if (cnt % 2 === 0) a = line.split(' ').map(Number);
      else {
        b = line.split(' ').map(Number);
        solution(a, b);
      }
      cnt++;
    }

    if (cnt === N * 2) {
      rl.close();
    }
  }
  console.log();
  process.exit();
})();

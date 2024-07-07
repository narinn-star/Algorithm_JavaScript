// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let cnt = [0, 0, 0, 0];

rl.on('line', function (line) {
  input = line.split(' ').map(Number);
  rl.close();
}).on('close', function () {
  input.forEach((e, idx) => {
    cnt[input[idx]]++;
  });

  let winner = 0;

  // 1 : 가위, 2 : 바위, 3 : 보
  if (cnt[1] === 0) {
    winner = cnt[3];
  } else if (cnt[2] === 0) {
    winner = cnt[1];
  } else if (cnt[3] === 0) {
    winner = cnt[2];
  }
  if (cnt[1] > 0 && cnt[2] > 0 && cnt[3] > 0) winner = 0;
  if (cnt[1] === 5 || cnt[2] === 5 || cnt[3] === 5) winner = 0;

  console.log(winner);
  process.exit();
});

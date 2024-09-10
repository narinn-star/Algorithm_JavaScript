/**
 * Topics : 수학, 그리디 알고리즘
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

const solution = (input) => {
  let cnt = 0;
  let sum = 0;

  for (let i = 1; ; i++) {
    sum += i;
    cnt++;
    if (sum > input) {
      cnt--;
      break;
    }
  }

  console.log(cnt);
};

rl.on('line', function (line) {
  input = +line;
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  let max = 0;
  let sum = 0;
  input.forEach((station) => {
    sum -= station[0];
    sum += station[1];
    max = Math.max(max, sum);
  });

  console.log(max);
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  solution(input);
  process.exit();
});

/* Topics : 수학, 구현, 사칙연산

Explanation

*/

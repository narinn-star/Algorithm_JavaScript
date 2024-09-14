/**
 * Topics : 브루트포스 알고리즘, 백트래킹
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

const solution = (N) => {
  let nums = [];

  if (N <= 10) return N;
  else if (N >= 1023) return -1;

  const searchNums = (number, idx) => {
    if (idx > 10) return;

    nums.push(number);
    for (let i = 0; i < number % 10; i++) {
      searchNums(number * 10 + i, idx + 1);
    }
  };

  for (let i = 0; i < 10; i++) {
    searchNums(i, 1);
  }

  nums.sort((a, b) => a - b);

  return nums[N];
};

rl.on('line', function (line) {
  input = +line;
  rl.close();
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

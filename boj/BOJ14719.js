const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const [height, width] = input[0];
  const block = [...input[1]];
  let sum = 0;

  for (let i = 1; i < block.length; i++) {
    let l = 0;
    let r = 0;

    for (let j = 0; j < i; j++) {
      l = Math.max(l, block[j]);
    }
    for (let j = i + 1; j < width; j++) {
      r = Math.max(r, block[j]);
    }

    if (block[i] < l && block[i] < r) {
      sum += Math.min(l, r) - block[i];
    }
  }

  return sum;
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

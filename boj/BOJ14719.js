const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const [height, width] = input[0];
  const arr = [...input[1]];

  const block = Array.from({ length: height }, () => Array(width).fill(0));

  for (let i = 0; i < width; i++) {
    let count = arr[i];
    for (let j = height - 1; j >= height - count; j--) {
      if (j >= 0) {
        block[j][i] = 1;
      }
    }
  }

  for (const row of block) {
  }

  //return block.map((row) => row.join(',')).join('\n');
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

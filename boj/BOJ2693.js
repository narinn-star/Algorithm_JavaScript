const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  for (let i = 1; i < input.length; i++) {
    let arr = input[i].sort((a, b) => {
      return b - a;
    });
    console.log(arr[2]);
  }
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  solution(input);
  process.exit();
});

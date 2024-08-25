const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let a, b;
let sum = 0;

const solution = (input) => {
  input.forEach((height) => {
    sum += height;
  });

  input.sort((a, b) => {
    return a - b;
  });

  search();

  for (let i = 0; i < 9; i++) {
    if (i == a || i == b) continue;
    else {
      console.log(input[i]);
    }
  }
};

const search = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
      if (sum - (input[i] + input[j]) === 100) {
        sum -= input[i] = input[j];
        a = i;
        b = j;
        return;
      }
    }
  }
};

rl.on('line', function (line) {
  input.push(+line);
}).on('close', function () {
  solution(input);
  process.exit();
});

/* Topics : 정렬, 브루트포스 알고리즘

js 기본이 부족하다 ..

*/

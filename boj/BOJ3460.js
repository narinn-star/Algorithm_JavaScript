const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (list) => {
  let res = [];

  for (let i = 1; i <= list[0]; i++) {
    const binary = list[i].toString(2);
    const binaryArr = [...binary].reverse();

    for (let j = 0; j < binaryArr.length; j++) {
      if (binaryArr[j] === '1') {
        res.push(j);
      }
    }
  }
  console.log(res.join(' '));
};

rl.on('line', function (line) {
  input.push(+line);
}).on('close', function () {
  solution(input);
  process.exit();
});

/* Topics : 수학, 구현

Explanation

입력이 너무 어려워요.

*/

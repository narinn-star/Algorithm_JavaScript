const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  let a = input[0];
  let b = input[1];
  let r;

  while (true) {
    if (r === 0) break;
    r = a % b;
    a = b;
    b = r;
  }
  console.log(a);
  console.log(a * (input[0] / a) * (input[1] / a));
};

rl.on('line', function (line) {
  input = line.split(' ').map(Number);
}).on('close', function () {
  solution(input);
  process.exit();
});

/* Topics : 수학, 정수론, 유클리드 호제법

Explanation

유클리드 호제법(유클리드 알고리즘)은 2개의 자연수 또는 정식의 최대공약수를 구하는 알고리즘의 하나다. _ wikipedia
자연수 a와 자연수 b를 나눈 나머지 r 세가지 수로 최대공약수를 구한다.
1) a % b = r1
2) b % r1 = r2
3) r1 % r2 = r3
...
이때 나머지가 0이되면 나눈 수가 최대공약수가 된다.

최소공배수는 이 최대공약수로 각 자연수를 나눈 값들과 최대공약수를 모두 곱한 값이다.

신통방통,,🫠

*/

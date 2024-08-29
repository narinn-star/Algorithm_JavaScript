const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const operationArray = [];
let max = -Infinity;
let min = Infinity;

const solution = (input) => {
  const [N, nums, op] = input;

  for (let i = 0; i < op[0]; i++) operationArray.push('+');
  for (let i = 0; i < op[1]; i++) operationArray.push('-');
  for (let i = 0; i < op[2]; i++) operationArray.push('*');
  for (let i = 0; i < op[3]; i++) operationArray.push('/');

  const backtrack = (idx, res, operators) => {
    if (idx === N - 1) {
      max = Math.max(res, max);
      min = Math.min(res, min);
      return;
    }

    for (let i = 0; i < operationArray.length; i++) {
      if (operators[i] === 0) {
        operators[i]++;

        let sum = res;
        if (operationArray[i] === '+') {
          sum += nums[idx + 1];
        } else if (operationArray[i] === '-') {
          sum -= nums[idx + 1];
        } else if (operationArray[i] === '*') {
          sum *= nums[idx + 1];
        } else if (operationArray[i] === '/') {
          sum =
            res < 0
              ? -Math.floor(-res / nums[idx + 1])
              : Math.floor(res / nums[idx + 1]);
        }

        backtrack(idx + 1, sum, operators);

        operators[i]--;
      }
    }
  };

  backtrack(0, nums[0], new Array(operationArray.length).fill(0));

  console.log(max ? max : 0);
  console.log(min ? min : 0);
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  solution(input);
  process.exit();
});

/* Topics : 브루트포스 알고리즘, 백트래킹

Explanation
js issue..
- 정수 나눗셈에서 추가적인 처리가 필요했다. 음수일 때와 양수일 때를 나누어 처리했고
- 마지막 출력 시에 max나 min이 -0 +0일 때 예외 처리를 했다.

자바스크립트에서는 -0과 0이 다르기 때문에 따로 처리를 해줘야 한다.

두 번이나 풀었던 문제인데도 어렵게 느껴졌다.. 백트래킹은 너무 어려워.. 뭔가 풀이 자체가 엄청 직관적이지 않아서 그런 것 같다.
나중에 또 다시 풀어봐야할 듯 하다. 로직 자체도 그려보면서 확실히 하는 게 좋을 것 같다.

*/

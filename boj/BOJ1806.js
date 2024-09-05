const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const [N, S] = input[0].split(' ').map(Number);
  const arr = input[1].split(' ').map(Number);

  let left = 0;
  let right = 0;
  let cnt = N + 1;
  let sum = 0;

  while (right <= N) {
    if (sum >= S) {
      cnt = Math.min(cnt, right - left);
      sum -= arr[left];
      left++;
    } else {
      sum += arr[right];
      right++;
    }
  }

  if (cnt === N + 1) return 0;
  else return cnt;
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

/* Topics : 누적 합, 두 포인터

Explanation

문제를 제대로 읽자 !

*/

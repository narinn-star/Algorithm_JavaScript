const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

const solution = (N) => {
  let arr = [];
  let n = N[0];
  let K = N[1];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }

  return arr[K - 1] === undefined ? 0 : arr[K - 1];
};

rl.on('line', function (line) {
  N = line.split(' ').map(Number);
  rl.close();
}).on('close', function () {
  console.log(solution(N));
  process.exit();
});

/* Topics : 수학, 브루트포스 알고리즘

Explanation
자바스크립트 sort는 .. 이상해
[1, 5, 547, 2735] 를 sort하면 [1, 2735, 5, 547]로 됨.. ㅠㅠ!!
소팅할 필요 없는데 괜히 소팅했다가 한 번 틀려버렸다 ~

*/

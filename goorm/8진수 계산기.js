/**
 * Topics: 프로그래밍
 *
 * 백준 입력으로 할 땐 배열 선언 [] 해두고 arr.push()로 받아도 배열로 들어갔는데 얘는 배열 안에 배열이 또 들어감..
 * 왜지 ?????????????
 *
 * 그래서 그냥 arr = 로 해주니까 일차원배열이 정상적으로 만들어 졌따.
 */

// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let arr = [];
  for await (const line of rl) {
    if (N === null) N = Number(line);
    else {
      arr = line.split(' ').map(Number);
      rl.close();
    }
  }

  solution(N, arr);
  process.exit();
})();

const solution = (N, arr) => {
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });

  console.log(sum.toString(8));
};

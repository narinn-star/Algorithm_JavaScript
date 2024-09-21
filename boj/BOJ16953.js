/**
 * 3년 전 자바로는 저 아래 주석해둔 것처럼 풀었던데, 모르겠다 ㅇㅅㅇ.. 그게 그거인듯 ?
 * 처음에 queue에 cnt 값 안담고 그냥 계속 cnt++ 해줬는데 어쩐지 ~ 값이 15가 나오더라고요
 * 당연하지 .. ㅎ_ㅎ
 *
 * 쉽게 풀었읍니다 하지만 느렸음 ,, 😭
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const [A, B] = input[0];

  let queue = [A, 1];

  while (queue.length) {
    const q = queue.shift();
    const c = queue.shift();

    if (q === B) return c;
    else {
      if (q * 2 <= B) {
        queue.push(q * 2, c + 1);
      }
      if (q * 10 + 1 <= B) {
        queue.push(q * 10 + 1, c + 1);
      }
    }
  }

  return -1;
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

//   while (B > A) {
//     if(B % 2 === 0) {
//         B = B / 2;
//         cnt++;
//     }else {
//         if(B % 10 === 1) {
//             B = B / 10;
//             cnt++;
//         }else {
//             cnt = 0;
//             break;
//         }
//     }
//   }

//   return cnt === 0 || A > B ? -1 : cnt;

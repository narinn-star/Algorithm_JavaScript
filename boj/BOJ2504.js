const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

const solution = (input) => {
  let pStack = [];
  let sum = 1;
  let res = 0;
  let prev = '';

  for (let i = 0; i < input.length; i++) {
    let cur = input[i];
    if (cur === '(') {
      pStack.push(cur);
      sum *= 2;
    } else if (cur === ')') {
      if (pStack.length === 0 || pStack[pStack.length - 1] !== '(') {
        res = 0;
        break;
      } else if (prev === '(') {
        res += sum;
      }
      pStack.pop();
      sum /= 2;
    } else if (cur === '[') {
      pStack.push(cur);
      sum *= 3;
    } else if (cur === ']') {
      if (pStack.length === 0 || pStack[pStack.length - 1] !== '[') {
        res = 0;
        break;
      } else if (prev === '[') {
        res += sum;
      }
      pStack.pop();
      sum /= 3;
    }
    prev = cur;
  }
  if (pStack.length === 0) console.log(res);
  else console.log(0);
};

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});

/* Topics : 구현, 자료 구조, 스택

Explanation

이게 최선이었나 .. ㅠㅠ
([일 때는 push하고 )]일 때 계산해주려 했는데 중첩되는 게 있으면 계속 꼬여서 문제 푸는데 한참 걸렸다.
마지막엔 결국 다른 분이 푼 걸 참고했다.
열 때 계산해주고, 닫을 때 다시 감산을 해주면 되는 아주 쉬운 방법이었슴,,
이게 되나 싶지만 이게 맞음 😭
진짜 꼭 다시 풀어보고싶은 문제 .. 스택 쓰는거라 어려운 문제도 아닌데 너무 오래 시간써서 자존감만 떨어져버림

*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

const solution = (input) => {
  const makeArr = () => {
    let arr = new Array(input[1] + 1);
    arr[0] = 0;
    let idx = 1;
    for (let i = 1; i <= input[1]; i++) {
      for (let j = 1; j <= i; j++) {
        arr[idx] = i;
        idx++;
        if (idx === input[1] + 1) return arr;
      }
    }
  };

  let array = makeArr();
  //   let sum = 0;

  //   for (let i = input[0]; i <= input[1]; i++) {
  //     sum += array[i];
  //   }

  const sum = array
    .slice(input[0], input[1] + 1)
    .reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
};

rl.on('line', function (line) {
  input = line.split(' ').map(Number);
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});

/* Topics : 수학, 구현

Explanation

배열을 저렇게 만들어주는 게 맞나...
대부분 저렇게 하는 것 같긴 한데 바깥쪽 for loop에 레이블을 붙여서 내부 루프에서 break로 바깥 루프를 종료할 수 있다..
세상 처음 안 문법
reduce도 한 번 써먹어 봤다 ~

acc: 누산기
cur: 현재 값(요소)
0: 초기값
*/

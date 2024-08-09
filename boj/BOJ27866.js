const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (list) => {
  let index = +list[1];
  console.log(list[0].charAt(index - 1));
};

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

/* Topics : 구현, 문자열

Explanation
입력받기 너무 어려워요.
자꾸 뭐가 안된대.
두 줄 입력받기부터 너무 힘든데.. for루프로 감싸져 있는 게 더 편한 듯..

*/

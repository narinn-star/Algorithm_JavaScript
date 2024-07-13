// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let str = null;

rl.on('line', function (line) {
  if (str === null) {
    str = line.split('');
  }
  rl.close();
}).on('close', function () {
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      // 처음부터 공백이거나 str[i]가 공백일 때
      continue;
    } else {
      // 문자일 때
      if (i === 0) {
        cnt++;
      } else if (str[i - 1] === ' ') {
        // 앞 문자가 공백일 때
        cnt++;
      } else {
        // 앞 문자가 문자일 때
        continue;
      }
    }
  }

  console.log(cnt);

  process.exit();
});

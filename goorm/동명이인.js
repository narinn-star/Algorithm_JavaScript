// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let cnt, name;
  let arr = [];

  for await (const line of rl) {
    if (!cnt) {
      [cnt, name] = line.split(' ');
      cnt = +cnt;
    } else {
      arr.push(line);
      if (arr.length === cnt) rl.close();
    }
  }

  console.log(solution(name, arr));
  process.exit();
})();

const solution = (name, arr) => {
  let res = 0;
  arr.forEach((val) => {
    if (new RegExp(name).test(val)) {
      res++;
    }
  });

  return res;
};

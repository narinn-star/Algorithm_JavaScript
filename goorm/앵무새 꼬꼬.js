// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let N = null;
  let cnt = 0;
  let str = [];
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for await (const line of rl) {
    if (!N) N = +line;
    else {
      str.push(line);
      cnt += 1;
    }

    if (cnt === N) {
      for (let i = 0; i < N; i++) {
        let res = '';
        for (let j = 0; j < str[i].length; j++) {
          if (vowels.includes(str[i].charAt(j))) {
            res += str[i].charAt(j);
          }
        }
        if (res.length === 0) console.log('???');
        else console.log(res);
      }
      rl.close();
    }
  }

  process.exit();
})();

/**
 * 회의실 개수 구하는 문제와 거의 동일했던 문제다.
 *
 * 시작 시간 기준으로 아무리 이렇게 저렇게 정렬해봐야 절대 답이 나오지 않음.. 끝나는 시간을 기준으로 정렬해야 빠르게 끝내는 행사 먼저
 * 진행하고 끝낸 뒤 다음 행사를 진행할 수 있다.
 *
 * 쉬움 문제길래 엄청 만만하게 봤는뎅 내가 멍청이었다 ......
 */

// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let input = [];
  for await (const line of rl) {
    input.push(line);
  }

  rl.close();

  const N = Number(input.shift());
  const events = [];

  input.forEach((i) => {
    const [s, e] = i.split(' ').map(Number);
    events.push([s, e]);
  });

  events.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let cnt = 0;
  let time = -1;

  for (let [start, end] of events) {
    if (start > time) {
      cnt++;
      time = end;
    }
  }

  console.log(cnt);

  process.exit();
})();

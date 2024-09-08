/*Topics : 월간 코드 챌린지 시즌1

    Explanation
    ✔️ javascript
    이진수 변환하기 => parseInt(number.toString(2))

*/

const solution = (s) => {
  let answer = [];

  let zeroCnt = 0;
  let cnt = 0;

  const countingZero = (num) => {
    s = '';
    for (let i = 0; i < num.length; i++) {
      if (num[i] === '0') {
        zeroCnt++;
      } else {
        s += num[i];
      }
    }
  };

  while (true) {
    if (s === '1') break;

    countingZero(s);
    s = parseInt(s.length).toString(2);

    cnt++;
  }

  return [cnt, zeroCnt];
};

console.log(solution('110010101001'));

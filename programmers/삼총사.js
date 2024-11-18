/**
 * Topic: 연습문제
 */

/**
 * @param {number[]} number
 * @returns {number}
 */
function solution(number) {
  let cnt = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) cnt++;
      }
    }
  }
  return cnt;
}

// 3중 loop가 아닌 방법으로 푸는 방법을 찾아봤더니 ,, 🫠
function solution2(number) {
  let cnt = 0;

  const comb = (current, start) => {
    if (current.length === 3) {
      cnt += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      comb([...current, number[i]], i + 1);
    }
  };
  comb([], 0);
  return cnt;
}

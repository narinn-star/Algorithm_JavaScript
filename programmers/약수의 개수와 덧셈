/**
 * Topic: 월간 코드 챌린지 시즌2
 */

/**
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function solution(left, right) {
  let res = 0;
  for (let i = left; i <= right; i++) {
    let cnt = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) cnt++;
    }

    if (cnt % 2 === 0) res += i;
    else res -= i;
  }

  return res;
}

/**
 * Topic: 연습문제
 */

/**
 * @param {string} s
 * @returns {boolean}
 */
function solution(s) {
  let cnt = 0;
  s.split('').forEach((c) => {
    if (c === 'p' || c === 'P') cnt++;
    else if (c === 'y' || c === 'Y') cnt--;
  });

  return cnt === 0 ? true : false;
}

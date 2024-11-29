/**
 * Topic: 연습문제
 */

/**
 * @param {string} s
 * @returns {number}
 */
function solution(s) {
  let x = 0;
  let x_count = 0;
  let res = [];

  for (i = 0; i < s.length; i++) {
    if (s[i] === s[x]) x_count++;
    else x_count--;
    if (x_count === 0) {
      res.push(s.substring(x, i + 1));
      x = i + 1;
    }
  }
  return res.join('').length === s.length ? res.length : res.length + 1;
}

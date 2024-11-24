/**
 * Topic: 연습문제
 *
 * 그냥 reverse()하믄 되는뎅 ...
 */
/**
 * @param {string} s
 * @returns {string}
 */

function solution(s) {
  return s
    .split('')
    .sort(function compare(a, b) {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    })
    .join('');
}

/**
 * Topic: 연습문제
 */
/**
 * @param {number} n
 * @returns {number[]}
 */
function solution(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((val) => Number(val));
}

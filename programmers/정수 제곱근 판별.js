/**
 * Topic: 연습문제
 *
 * sqrt, pow 활용
 */
/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  if (Number.isInteger(Math.sqrt(n))) return Math.pow(Math.sqrt(n) + 1, 2);
  return -1;
}

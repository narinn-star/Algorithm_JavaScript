/**
 * Topic: 연습문제
 */

/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

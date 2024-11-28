/**
 * Topic: 연습문제
 */

/**
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
function solution(x, n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }

  return arr;
}

/**
 * Topic: 연습문제
 */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} n
 * @returns {number}
 */
function solution(a, b, n) {
  let sum = 0;
  let empty = n;

  while (empty >= a) {
    const give = a * Math.floor(empty / a);
    empty = empty - give + (give / a) * b;
    sum += (give / a) * b;
  }

  return sum;
}

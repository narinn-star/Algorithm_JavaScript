/**
 * Topic: 연습문제
 */

/**
 * @param {number} n
 * @returns {string}
 */

function solution(n) {
  const watermelon = '수박';

  if (n % 2 === 0) return watermelon.repeat(n / 2);

  return watermelon.repeat(n / 2) + '수';
}

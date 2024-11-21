/**
 * Topic: 연습문제
 */

/**
 * @param {number} n
 * @param {number} m
 * @returns {number[]}
 */
function solution(n, m) {
  let max = 0; // 최대공약수

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) max = i;
  }

  let tmp = 1;
  while (true) {
    if ((tmp * m) % n === 0) {
      return [max, tmp * m];
    }
    tmp++;
  }
}

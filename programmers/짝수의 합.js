/**
 * Topic: 코딩테스트 입문
 */
/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) sum += i;
  }

  return sum;
}

/**
 * Topic: 코딩테스트 입문
 */
/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
function solution(n, k) {
  let service = Math.floor(n / 10);

  return n * 12000 + k * 2000 - service * 2000;
}

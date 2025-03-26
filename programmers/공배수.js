/**
 * Topic: 코딩 기초 트레이닝
 *
 * 다른사람이 푼 풀이
 * function solution(number, n, m) {
 *     return +!(number % n || number % m);
 * }
 * ..
 */
/**
 *
 * @param {number} number
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */
function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

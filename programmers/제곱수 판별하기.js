/**
 * Topic: 코딩테스트 입문
 * ?????????
 *
 * 왜 101이 제곱수로 나오지?
 * 아는사람 ~~
 */
/**
 *
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  const num = Math.sqrt(n);

  return num % 1 === 0 ? 1 : 2;
}

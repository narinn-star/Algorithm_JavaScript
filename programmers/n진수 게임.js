/**
 * Topic: 2018 KAKAO BLIND RECRUITMENT
 *
 */
/**
 * @param {number} n
 * @param {number} t
 * @param {number} m
 * @param {number} p
 * @returns {string}
 */
function solution(n, t, m, p) {
  let str = '';

  // 숫자 모두 구하기
  for (let i = 0; i < m * t; i++) {
    str += i.toString(n).toUpperCase();
  }

  let answer = '';
  let num = 0;

  while (answer.length < t) {
    const s = str.substring(num, num + m);
    answer += s[p - 1];

    num += m;
  }

  return answer;
}

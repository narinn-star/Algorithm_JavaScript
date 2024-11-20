/**
 * Topic: 연습문제
 */

/**
 * @param {string} t
 * @param {string} p
 * @returns {number}
 */
function solution(t, p) {
  const length = p.length;
  let cnt = 0;
  p = Number(p);

  for (let i = 0; i <= t.length - length; i++) {
    const str = t.slice(i, i + length);
    if (Number(str) <= p) cnt++;
  }

  return cnt;
}

/**
 * Topic: 2017 팁스다운
 *
 * n은 왜 준거지요
 */

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @returns
 */
function solution(n, a, b) {
  let cnt = 0;

  while (a !== b) {
    a = Math.round(a / 2);

    b = Math.round(b / 2);

    cnt++;
  }

  return cnt;
}

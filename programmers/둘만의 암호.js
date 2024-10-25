/**
 * Topics: 연습문제
 *
 */

/**
 * @param {string} s
 * @param {string} skip
 * @param {number} index
 * @return {string}
 */
function solution(s, skip, index) {
  const skipCodes = skip.split('').map((s) => s.charCodeAt());

  const res = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i);
    let newCh = ch;
    let cnt = 0;

    for (let j = 0; cnt < index; j++) {
      newCh++;
      if (newCh > 122) {
        newCh = 97;
      }
      if (!skipCodes.includes(newCh)) {
        cnt++;
      }
    }

    res.push(newCh);
  }

  return String.fromCharCode(...res);
}

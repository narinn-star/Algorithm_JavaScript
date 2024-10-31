/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} section
 * @returns {number}
 */
function solution(n, m, section) {
  var answer = 0;
  let painted = 0;

  for (let sec of section) {
    if (painted < sec) {
      answer++;
      painted = sec + m - 1;
    }
  }
  return answer;
}

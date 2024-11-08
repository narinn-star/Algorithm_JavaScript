/**
 * Topic: 연습문제
 */

/**
 * @param {number} k
 * @param {number[]} score
 * @returns {number[]}
 */
function solution(k, score) {
  const arr = [];

  const res = [];

  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr.sort((a, b) => b - a).splice(k);
    res.push(Math.min(...arr));
  }

  return res;
}

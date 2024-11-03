/**
 * Topics: 완전탐색
 */

/**
 * @param {number[]} answers
 * @returns {number[]}
 */
function solution(answers) {
  const st1 = [1, 2, 3, 4, 5];
  const st2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const result = [0, 0, 0];
  const len = answers.length;

  for (let i = 0; i < len; i++) {
    if (st1[i % 5] === answers[i]) result[0]++;
    if (st2[i % 8] === answers[i]) result[1]++;
    if (st3[i % 10] === answers[i]) result[2]++;
  }

  const answer = [];
  const max = Math.max(...result);
  let idx = 0;

  for (let i = 0; i < 3; i++) {
    if (max === result[i]) {
      answer[idx] = i + 1;
      idx++;
    }
  }

  return answer;
}

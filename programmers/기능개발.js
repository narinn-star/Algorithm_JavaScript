/**
 * Topic: 스택/큐
 */

/**
 * @param {number[]} progresses
 * @param {number[]} speeds
 * @returns {number[]}
 */

function solution(progresses, speeds) {
  const length = progresses.length;
  const days = [];

  for (let i = 0; i < length; i++) {
    const day = Math.ceil((100 - progresses[i]) / speeds[i]);
    days.push(day);
  }

  const ans = [];
  let cnt = 1;
  let max = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= max) cnt++;
    else {
      max = days[i];
      ans.push(cnt);
      cnt = 1;
    }
  }

  ans.push(cnt);

  return ans;
}

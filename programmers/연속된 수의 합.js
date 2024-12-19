/**
 *
 * @param {number} num
 * @param {number} total
 * @returns {number[]}
 */
function solution(num, total) {
  let sum = 0;
  let left = 1;
  let right = left + num - 1;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  while (true) {
    if (sum === total) break;
    else if (sum < total) {
      left++;
      right++;
      sum += num;
    } else {
      left--;
      right--;
      sum -= num;
    }
  }

  return Array.from({ length: right - left + 1 }, (_, idx) => left + idx);
}

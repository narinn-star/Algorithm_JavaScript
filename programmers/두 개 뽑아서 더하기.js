/**
 * Topic: 월간 코드 챌린지 시즌1
 */

/**
 * @param {number[]} numbers
 * @returns {number[]}
 */
function solution(numbers) {
  let res = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      res.push(numbers[i] + numbers[j]);
    }
  }

  res.sort((a, b) => a - b);

  const set = new Set(res);

  return Array.from(set);
}

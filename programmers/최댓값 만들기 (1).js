/**
 * @param {numbers[]} numbers
 * @returns {number}
 */
function solution(numbers) {
  numbers.sort((a, b) => b - a);

  return numbers[0] * numbers[1];
}

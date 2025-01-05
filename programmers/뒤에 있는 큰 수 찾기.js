/**
 * @param {number[]} numbers
 * @returns {number[]}
 */

function solution(numbers) {
  const length = numbers.length;
  const res = new Array(length).fill(-1);
  const stack = [];
  for (var i = 0; i < length; i++) {
    while (stack && numbers[stack.at(-1)] < numbers[i]) {
      res[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return res;
}

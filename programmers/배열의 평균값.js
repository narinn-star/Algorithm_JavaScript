/**
 * Topic: 코딩테스트 입문
 */
/**
 * @param {number[]} numbers
 * @returns
 */
function solution(numbers) {
  let sum = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return sum / numbers.length;
}

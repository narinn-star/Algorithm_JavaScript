/**
 * Topics: Array, Two Pointers, Binary Search
 *
 * 투포인터로 쉽게 풀 수 있는 문제여따.. 오랜만에 프로그래머스 아니고 릿코드로 풀었더니 머리가 샥.. 정리되는 느낌
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];
    else if (sum > target) right--;
    else left++;
  }
};

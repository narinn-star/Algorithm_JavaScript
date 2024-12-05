/**
 * Topic: 연습문제
 *
 */

/**
 * @param {number[]} elements
 * @returns {number}
 */
function solution(elements) {
  const numSet = new Set(elements);
  const length = elements.length;

  for (let i = 1; i < length; i++) {
    let sum = 0;
    for (let j = 0; j < length; j++) {
      if (j === 0) {
        for (let k = 0; k < i; k++) {
          sum += elements[k];
        }
      } else {
        sum -= elements[j - 1];
        sum += elements[(j + i - 1) % length];
      }
      numSet.add(sum);
    }
  }

  return numSet.size;
}

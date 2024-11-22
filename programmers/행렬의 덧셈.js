/**
 * Topic: 연습문제
 */

/**
 * @param {number[][]} arr1
 * @param {number[][]} arr2
 * @returns {number[][]}
 */
function solution(arr1, arr2) {
  const len = arr1.length;
  const innerLen = arr1[0].length;
  const answer = Array.from({ length: len }, () => Array(innerLen).fill(0));

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < innerLen; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return answer;
}

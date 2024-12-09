/**
 * Topic: 연습문제
 *
 * 삼중 for loop은 익숙하지 안항용...
 * 행렬 곱셈도 학부생때 해보고 진짜 거의 머릿속에서 지워졌는데 다시 머리에 끼워넣어줌
 * (axb) x (cxd) = (axd), 그리고 행렬 곱셈하는 방법까지 🤯
 *
 */

/**
 * @param {number[][]} arr1
 * @param {number[][]} arr2
 * @returns {number[][]}
 */
function solution(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2[0].length;
  const arr = Array.from({ length: len1 }, () => new Array(len2).fill(0));

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      let sum = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      arr[i][j] = sum;
    }
  }

  return arr;
}

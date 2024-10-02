/**
 * Topics: Array, Binary Search, Matrix
 *
 * 1번 풀이
 * 브루트포스
 *
 * 해당 문제는 O(log(m * n))으로 풀으라는 지시가 있어서 아래 풀이가 맞음
 *
 * 2번 풀이
 * 이분 탐색
 *
 * 이차원 배열로 되어 있어서 한 줄씩 나눠서 이분 탐색을 진행했다.
 * 아마 한 번에 하는 방법이 더 빠를 것 같은데, 이게 내 한계 ㅠㅠ
 * 시작이랑 끝값을 저장해두고 mid값을 갱신하는 방식이다. (mid값을 갱신하기 위해서는 start, end를 갱신해주는 건 당연함)
 * matrix[i][mid]값과 target값이 일치하면 true, 그렇지 않으면 모든 반복문이 끝난 뒤에 false를 반환한다.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix1 = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === target) return true;
    }
  }

  return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  const m = matrix.length;
  const n = matrix[0].length;

  let start = 0;
  let end = n - 1;

  for (let i = 0; i < m; i++) {
    if (target <= matrix[i][n - 1]) {
      while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (matrix[i][mid] === target) {
          return true;
        }

        if (target < matrix[i][mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }
  }
  return false;
};

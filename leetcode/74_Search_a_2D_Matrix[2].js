/**
 * Topics: Array, Binary Search, Matrix
 *
 * 이전에는 냅다 이중 for loop이랑 matrix 2차원 배열 자체를 사용해서 풀었던데,
 * 자바스크립트에 2차원 배열을 1차원 배열로 쭉 풀어주는 함수 flat()이 있어서 사용해봤다.
 *
 * flat으로 하면 1차원 배열로 한 번만 비교하면 되고, 2차원 배열은 각 줄마다 계속 검색해줘야한다는 점이 다른데
 * 성능 차이는 아래와 같다.
 *
 * flat 사용
 * - 2차원 배열을 1차원 배열로 변환하는 과정에서 전체 배열을 순회하며 새로운 배열을 생성하면 O(m * n)
 *  - 이미 오버됐네.. ㅎ
 * - 이후에 이진 탐색 수행 -> O(log(m * n))
 * - 총 시간 복잡도 : O(mn) + O(log(mn)) => O(mn)
 *
 * 2차원 배열 그대로 사용
 * - 행의 마지막 값을 체크해 탐색할 행을 먼저 줄이기 -> O(m)
 * - 이후 이진 탐색 수행 -> O(log n)
 * - 총 시간 복잡도 : O(m) + O(log n) => O(m + log n)
 *   - m이 크다고 해도 각 행에서 한 번의 이진 탐색만 수행하기 때문에 훨씬 빠르다
 *
 * 결론 : 이전에 푼게 낫다. 퇴행했네 😭
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  const flatMatrix = matrix.flat();

  let left = 0,
    right = flatMatrix.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target < flatMatrix[mid]) right = mid - 1;
    else if (target > flatMatrix[mid]) left = mid + 1;
    else return true;
  }

  return false;
};

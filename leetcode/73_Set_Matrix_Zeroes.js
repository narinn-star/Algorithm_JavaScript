/**
 * Topics: Array, Hash Table, Matrix
 *
 * 0이 있는 가로, 세로 줄을 모두 0으로 바꿔주는 문제다.
 *
 * 주어지는 matrix에서 0이 담긴 좌표를 큐에 넣어두고, 하나씩 꺼내면서 해당 좌표의 가로/세로 부분에 모두 0으로 바꿨다.
 * 문제에서는 O(m * n)이 아닌 O(m + n)으로 풀으라고 한 게 시간복잡도인줄 알고, 한참 헤맸는데 공간복잡도 말하는 거였슴..
 * 어쨌든 이러나 저러나 첫번째 풀이는 시간 복잡도도 공간복잡도도 O(m * n)이라, 다시 풀었다.
 *
 * 첫번째 풀이엔 큐에 담는 좌표가 m * n만큼 나올 수 있기 때문에 공간복잡도가 커지지만
 * 두번째 풀이에서는 row와 col을 따로 저장하기 때문에 무조건 m + n으로 나온다.
 * 푸는 방식은 거기서 거기같긴 하지만, 공간복잡도가 확실히 차이가 나서 신기했던 ,,
 *
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeroes = (matrix) => {
  const queue = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) queue.push([i, j]);
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < matrix[0].length; i++) {
      matrix[x][i] = 0;
    }

    for (let i = 0; i < matrix.length; i++) {
      matrix[i][y] = 0;
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeroes1 = (matrix) => {
  const rows = Array.from({ length: matrix.length }).fill(false);
  const cols = Array.from({ length: matrix[0].length }).fill(false);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        cols[j] = true;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rows[i] || cols[j]) matrix[i][j] = 0;
    }
  }
};

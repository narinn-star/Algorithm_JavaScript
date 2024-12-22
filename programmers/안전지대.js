/**
 * Topic: 코딩테스트 입문
 */
/**
 * @param {number[][]} board
 * @returns {number}
 */
function solution(board) {
  const xy = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];

  const lenX = board.length;
  const lenY = board[0].length;

  for (let i = 0; i < lenX; i++) {
    for (let j = 0; j < lenY; j++) {
      if (board[i][j] === 1) {
        xy.map((v) => {
          let [x, y] = v;
          [x, y] = [x + i, y + j];
          if (x >= 0 && x < lenX && y >= 0 && y < lenY && board[x][y])
            board[x][y] = 2;
        });
      }
    }
  }

  let ans = 0;
  board.map((v1) => v1.map((v2) => (v2 == 0 ? answer++ : 0)));

  return ans;
}

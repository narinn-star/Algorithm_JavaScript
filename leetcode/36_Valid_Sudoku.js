/**
 * @param {character[][]} board
 * @return {boolean}
 */

/**
 * Topics : Array, Hash Table, Matrix
 *
 * Explanation
 * 스도쿠를 채우는 게 아니고, 정상적인 스도쿠냐 아니냐를 판단하는 거라, 비교해야 할 것들을 9개의 Set으로 선언했다.
 * 그리고 하나씩 다 돌면서 Set에 들어있는지 안들어있는지 체크만 해주면 된다.
 * 가장 처음엔 아무것도 안들어가 있어도 무조건 true이기 때문에 비교해준 후에 넣으면 됨!
 *
 * 백준에서 얼마 전에 스도쿠 문제를 풀었는데, 그건 하나씩 채워보고 했던 것 같은데 이건 그냥 valid만 확인하면 되는 문제라
 * 훨씬 쉽게 풀었다.
 */

const isValidSudoku = (board) => {
  let rows = Array.from({ length: 9 }, () => new Set());
  let cols = Array.from({ length: 9 }, () => new Set());
  let boxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;

      let num = board[i][j];
      let idx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(num) || cols[j].has(num) || boxes[idx].has(num)) {
        return false;
      }

      rows[i].add(num);
      cols[j].add(num);
      boxes[idx].add(num);
    }
  }
  return true;
};

board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(board));

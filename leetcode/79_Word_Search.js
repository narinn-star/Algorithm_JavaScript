/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// Topics : Array, String, Backtracking, Matrix

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        board[i][j] = null;
        if (dfs(board, word, i, j, 1)) return true;
        board[i][j] = word[0];
      }
    }
  }

  return false;
};

const dfs = (board, word, x, y, depth) => {
  if (depth === word.length) {
    return true;
  }
  for (let i = 0; i < 4; i++) {
    let tmpX = x + dx[i];
    let tmpY = y + dy[i];

    if (
      tmpX >= 0 &&
      tmpY >= 0 &&
      tmpX < board.length &&
      tmpY < board[0].length
    ) {
      if (board[tmpX][tmpY] === word[depth]) {
        board[tmpX][tmpY] = null;
        if (dfs(board, word, tmpX, tmpY, depth + 1)) return true;
        board[tmpX][tmpY] = word[depth];
      }
    }
  }
};

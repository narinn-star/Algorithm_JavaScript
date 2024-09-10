/**
 * Topics : 구현, 브루트포스 알고리즘
 *
 * 아ㅣ 왤틂리 랸곱ㅈ ㅠㄷㄱ세뱌겨ㅜ소ㅓ;라ㅑ ㅠ퓨ㅠㅠㅠㅠㅠㅠㅠ
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const swapRow = (board, i, j) => {
  let tmp = board[i][j];
  board[i][j] = board[i + 1][j];
  board[i + 1][j] = tmp;
};

const swapCol = (board, i, j) => {
  let tmp = board[i][j];
  board[i][j] = board[i][j + 1];
  board[i][j + 1] = tmp;
};

const checkBoard = (board) => {
  let max = 0;

  // 행 체크
  for (let i = 0; i < board.length; i++) {
    let cnt = 1;
    for (let j = 0; j < board.length - 1; j++) {
      if (board[i][j] === board[i][j + 1]) {
        cnt++;
      } else {
        cnt = 1;
      }
      max = Math.max(max, cnt);
    }
  }

  // 열 체크
  for (let j = 0; j < board.length; j++) {
    let cnt = 1;
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i][j] === board[i + 1][j]) {
        cnt++;
      } else {
        cnt = 1;
      }
      max = Math.max(max, cnt);
    }
  }

  return max;
};

const solution = (N, board) => {
  let res = 0;

  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - 1; j++) {
      // 행 스왑
      if (board[i][j] !== board[i + 1][j]) {
        swapRow(board, i, j);
        res = Math.max(res, checkBoard(board));
        swapRow(board, i, j); // 상태 복구
      }

      // 열 스왑
      if (board[i][j] !== board[i][j + 1]) {
        swapCol(board, i, j);
        res = Math.max(res, checkBoard(board));
        swapCol(board, i, j); // 상태 복구
      }
    }
  }

  console.log(res);
};

rl.on('line', function (line) {
  const N = parseInt(line);
  const board = [];
  rl.on('line', function (line) {
    board.push(line.split(''));
    if (board.length === N) {
      solution(N, board);
      rl.close();
    }
  });
});

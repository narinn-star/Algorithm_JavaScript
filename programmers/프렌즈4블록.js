/**
 * Topic: 2018 KAKAO BLIND RECRUITMENT
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {string[]} board
 * @returns {number}
 */
function solution(m, n, board) {
  const boardArr = [];
  let breakBoard = [];
  let index = 0;
  let answer = 0;

  board.forEach((el) => boardArr.push(el.split('')));

  while (true) {
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n; j++) {
        if (
          boardArr[i][j] !== 0 &&
          boardArr[i][j] === boardArr[i][j + 1] &&
          boardArr[i][j + 1] === boardArr[i + 1][j] &&
          boardArr[i + 1][j] === boardArr[i + 1][j + 1]
        ) {
          breakBoard.push([i, j], [i, j + 1], [i + 1, j], [i + 1, j + 1]);
        }
      }
    }

    if (breakBoard.length === 0) break;
    breakBoard.forEach((el) => (boardArr[el[0]][el[1]] = 0));
    breakBoard = [];

    for (let i = 1; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (boardArr[i][j] === 0) {
          boardArr[i][j] = boardArr[i - 1][j];
          if (i - 2 >= 0 && boardArr[i - 2][j] !== 0) {
            index = i;
            while (index - 2 >= 0) {
              boardArr[index - 1][j] = boardArr[index - 2][j];
              boardArr[index - 2][j] = 0;
              index--;
            }
          } else {
            boardArr[i - 1][j] = 0;
          }
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (boardArr[i][j] === 0) answer++;
    }
  }
  return answer;
}

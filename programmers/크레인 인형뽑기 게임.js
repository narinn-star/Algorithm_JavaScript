/**
 * Topics: 2019 카카오 개발자 겨울 인턴십
 *
 * 1. 문제를 잘 읽자
 * - 인형이 담겨있는 배열을 잘못봐서 인덱스 다시 점검했다.
 * - 없어진 인형이 아니라 최종적으로 바구니에 담겨있는 인형의 개수를 리턴했다.. 없어진 인형 개수가 정답임 ㅇㅅㅇ..
 */

/**
 * @param {number[][]} board
 * @param {number[]} moves
 */

function solution(board, moves) {
  const basket = [];
  let cnt = 0;

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        basket.push(board[i][move - 1]);
        board[i][move - 1] = 0;
        break;
      }
    }

    if (basket.length > 1) {
      if (basket[basket.length - 1] === basket[basket.length - 2]) {
        basket.pop();
        basket.pop();
        cnt += 2;
      }
    }
  });

  return cnt;
}

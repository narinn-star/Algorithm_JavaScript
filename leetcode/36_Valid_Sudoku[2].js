/**
 * Topics: Array, Hash Table, Matrix
 *
 * 도대체 지난번에 어떻게 푼거지.. 박스 인덱스 찾느라고 한참 헤매다가 결국 봐버렸다😭
 * 원래 가로, 세로, 박스 세개 나눠서 다 계산하려 했는데 박스 인덱스 찾다보니 가로 세로는 i,j만 바꾸면 할 수 있어서 하나로 합쳤다.
 * 당연히 박스도 규칙이 있으니 가능할거라는 확신은 있었는데, 찾지를 못해.. 이럴때마다 수학 머리가 많이 부족하다는걸 체감함 ㅠㅠ
 * 무튼 인덱스만 찾아주면 나머지는 사실 아무것도 아니다.. 이게 제일 관건이었어 엉엉
 *
 * 여기서는 배열만 썼는데 중복 체크하면 되니까 Set으로 푸는게 좀 더 나을지도..!
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  const SIZE = 9;

  for (let i = 0; i < SIZE; i++) {
    const rowNums = new Array(10).fill(0);
    const colNums = new Array(10).fill(0);
    const boxNums = new Array(10).fill(0);

    for (let j = 0; j < SIZE; j++) {
      const row = board[i][j];
      const col = board[j][i];
      const boxRow = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const boxCol = (i % 3) * 3 + (j % 3);
      const box = board[boxRow][boxCol];

      if (row !== '.') {
        if (rowNums[Number(row)] > 0) return false;
        rowNums[Number(row)]++;
      }
      if (col !== '.') {
        if (colNums[Number(col)] > 0) return false;
        colNums[Number(col)]++;
      }

      if (box !== '.') {
        if (boxNums[Number(box)] > 0) return false;
        boxNums[Number(box)]++;
      }
    }
  }

  return true;
};

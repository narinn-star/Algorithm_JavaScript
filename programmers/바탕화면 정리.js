/**
 * Topics: 연습문제
 *
 * 처음에 files 배열에 i, j 한 번에 담았다가 대참사 나서 X, Y 따로 담았다.
 * 알고리즘 풀이 할 때 고집을 피우면 좋은점도 있는데 이렇게 안좋은점도 있다...........
 * 그냥 따로 담을걸
 */

/**
 *
 * @param {String[]} wallpaper
 * @returns {Number[]}
 */

function solution(wallpaper) {
  const fileX = [];
  const fileY = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        fileX.push(j);
        fileY.push(i);
      }
    }
  }

  fileX.sort((a, b) => a - b);
  fileY.sort((a, b) => a - b);

  // [lux, luy, rdx, rdy]
  return [
    fileY[0],
    fileX[0],
    fileY[fileY.length - 1] + 1,
    fileX[fileX.length - 1] + 1,
  ];
}

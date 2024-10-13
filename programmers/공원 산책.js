/**
 * Topics: 연습문제
 *
 * 전혀 어렵지 않은 문제였는데 마지막 checkObstacleY 호출할 때 (Y, Y - cnt)로 넘겨서 30분동안 찾음..
 * 근데 왜 테케 14개나 돌려도 안걸리느냐 이말이지 .. ㅠㅠㅠㅠㅠ
 *
 * 문제는 dfs로 풀 수도 있겠지만 뭐 굳이 그럴필요까진 없고 그냥 이동하는 횟수만큼 for루프만 돌려주면 된다.
 * 중요한건 장애물 검사할 때 for루프 범위를 잘 정해야한다는 것이다. start, end값을 대소비교해서 적절히 넣어줘야한다.
 * 그것 말고는 없는 문젠디 .. 🤣
 */

/**
 *
 * @param {String[]} park
 * @param {String[]} routes
 * @returns {Number[]}
 */

function solution(park, routes) {
  let X = 0;
  let Y = 0;

  outerLoop: for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === 'S') {
        X = i;
        Y = j;
        break outerLoop;
      }
    }
  }

  function checkRange(x, y) {
    return x >= 0 && y >= 0 && x < park.length && y < park[0].length;
  }

  function checkObstacleX(x, tmpX) {
    const [start, end] = x < tmpX ? [x, tmpX] : [tmpX, x];
    for (let i = start; i <= end; i++) {
      if (park[i][Y] === 'X') return false;
    }

    return true;
  }

  function checkObstacleY(y, tmpY) {
    const [start, end] = y < tmpY ? [y, tmpY] : [tmpY, y];
    for (let i = start; i <= end; i++) {
      if (park[X][i] === 'X') return false;
    }

    return true;
  }

  for (let i = 0; i < routes.length; i++) {
    const [dir, cntStr] = routes[i].split(' ');
    const cnt = Number(cntStr);

    switch (dir) {
      case 'N':
        if (checkRange(X - cnt, Y) && checkObstacleX(X, X - cnt)) {
          X -= cnt;
        }
        break;
      case 'S':
        if (checkRange(X + cnt, Y) && checkObstacleX(X, X + cnt)) {
          X += cnt;
        }
        break;
      case 'W':
        if (checkRange(X, Y - cnt) && checkObstacleY(Y, Y - cnt)) {
          Y -= cnt;
        }
        break;
      case 'E':
        if (checkRange(X, Y + cnt) && checkObstacleY(Y, Y + cnt)) {
          Y += cnt;
        }
        break;
    }
  }

  return [X, Y];
}

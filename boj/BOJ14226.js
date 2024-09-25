/**
 * Topics : 그래프 이론, 그래프 탐색, 너비 우선 탐색
 *
 * 이차원 배열로 만드는 건 생각도 못했지..
 * 나머지는 숨바꼭질 로직과 거의 비슷하긴 한데, 이차원배열으로 두는 것만 다르다.
 *
 * 나중에 다시 풀어봐야집 .,,,
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

const solution = (S) => {
  const visited = Array.from({ length: 1001 }, () => Array(1001).fill(0));
  visited[1][0] = 1;

  const queue = [];
  queue.push([1, 0, 0]);

  while (queue.length) {
    const [cur, clipBoard, sec] = queue.shift();

    if (cur === S) {
      console.log(sec);
      return;
    }

    if (cur <= 0 || cur > 1000) continue;

    // 클립보드 저장
    if (!visited[cur][cur]) {
      visited[cur][cur] = 1;
      queue.push([cur, cur, sec + 1]);
    }

    // 붙여넣기
    if (clipBoard && cur + clipBoard <= 1000) {
      if (!visited[cur + clipBoard][clipBoard]) {
        visited[cur + clipBoard][clipBoard] = 1;
        queue.push([cur + clipBoard, clipBoard, sec + 1]);
      }
    }

    // 한 개 삭제
    if (!visited[cur - 1][clipBoard]) {
      visited[cur - 1][clipBoard] = 1;
      queue.push([cur - 1, clipBoard, sec + 1]);
    }
  }
};

rl.on('line', function (line) {
  input = +line;
}).on('close', function () {
  solution(input);
  process.exit();
});

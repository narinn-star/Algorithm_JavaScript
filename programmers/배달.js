/**
 * Topics: Summer/Winter Coding(~2018)
 *
 * 다익스트라 문제
 *
 * 다익스트라는 다이나믹 프로그래밍을 활용한 대표적인 최단 경로 탐색 알고리즘이다.
 * road에 주어지는 a, b, c 값을 모두 path에 넣어주고 (양방향)
 * 최단경로를 계속해서 찾아주는 로직이다.
 *
 * 말로하면 쉬운데..... 익숙해지면 쉽긴 한데,..
 */

/**
 *
 * @param {number} N
 * @param {number[][]} road
 * @param {number} K
 * @returns
 */

function solution(N, road, K) {
  const paths = Array.from({ length: N + 1 }, () => Array(N + 1).fill([]));
  const village = Array.from({ length: N + 1 }).fill(Number.MAX_SAFE_INTEGER);

  road.forEach((val) => {
    const [a, b, c] = val;
    paths[a].push({ dest: b, cost: c });
    paths[b].push({ dest: a, cost: c });
  });

  const queue = [{ dest: 1, cost: 0 }];
  village[1] = 0;

  while (queue.length) {
    const { dest } = queue.pop();

    paths[dest].forEach((next) => {
      if (village[next.dest] > village[dest] + next.cost) {
        village[next.dest] = village[dest] + next.cost;
        queue.push(next);
      }
    });
  }

  return village.filter((val) => val <= K).length;
}

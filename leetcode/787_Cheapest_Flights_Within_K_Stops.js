/**
 * Topics: Dynamic Programming, Depth-First Search, Breadth-First Search, Graph, Heap (Priority Queue), Shortest Path
 *
 * 최대 k번을 거쳐서 src -> dst의 최소비용을 찾는 문제다.
 * start 위치를 키 값으로 해서 end 위치와 비용을 넣어줬다.
 * 최대 k번만 거쳐갈 수 있기 때문에 while 조건문을 저렇게 넣어둠. k = 0일 땐 한 번에 간다는 뜻이므로 0보다 크다고 해두면 안댐
 * 리스트에 넣어둔 값을 가지고 현재 위치하는 곳에서 갈 수 있는 곳으로 갔을 때의 비용을 더해 다음 위치와 함께 맵에 넣어준다.
 *
 */

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
const findCheapestPrice = (n, flights, src, dst, k) => {
  const flightLists = new Map();
  const visited = Array.from({ length: n }).fill(Number.MAX_SAFE_INTEGER);
  visited[src] = 0;

  flights.forEach((flight) => {
    const [start, end, cost] = flight;
    if (!flightLists.has(start)) {
      flightLists.set(start, []);
    }
    flightLists.get(start).push([end, cost]);
  });

  const queue = [[src, 0]];

  while (k-- > -1 && queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [cur, cost] = queue.shift();

      if (flightLists.has(cur)) {
        for (const [next, nextCost] of flightLists.get(cur)) {
          const newCost = cost + nextCost;
          if (newCost < visited[next]) {
            visited[next] = newCost;
            queue.push([next, newCost]);
          }
        }
      }
    }
  }

  return visited[dst] === Number.MAX_SAFE_INTEGER ? -1 : visited[dst];
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const N = +input.shift();
  const M = +input.shift();

  let [start, end] = input.pop().split(' ').map(Number);
  input = input.map((v) => v.split(' ').map(Number));

  let graph = Array.from({ length: N + 1 }, () => []);

  for (let [a, b, c] of input) {
    graph[a].push({ node: b, cost: c });
  }

  let distance = Array.from({ length: N + 1 }).fill(Infinity);
  let visited = Array.from({ length: N + 1 }).fill(false);

  const find = () => {
    let minDistance = Infinity;
    let minNode = 0;

    for (let i = 1; i <= N; i++) {
      if (!visited[i] && distance[i] < minDistance) {
        minDistance = distance[i];
        minNode = i;
      }
    }

    return minNode;
  };

  const dijkstra = () => {
    distance[start] = 0;
    visited[start] = true;

    graph[start].forEach((next) => {
      distance[next.node] = Math.min(distance[next.node], next.cost);
    });

    for (let i = 1; i <= N; i++) {
      let small = find();
      visited[small] = true;

      graph[small].forEach((next) => {
        const tmp = distance[small] + next.cost;
        if (tmp < distance[next.node] && !visited[next.node]) {
          distance[next.node] = tmp;
        }
      });
    }
  };

  dijkstra();

  return distance[end];
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

/* Topics : 그래프 이론, 최단 경로, 데이크스트라

Explanation
    

*/

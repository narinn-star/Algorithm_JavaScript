/**
 * Topics : 그래프 이론, 그래프 탐색, 깊이 우선 탐색, 너비 우선 탐색
 *
 * DFS, BFS 푸는데는 크게 문제가 없는데 java에 너무 익숙해져 있어서 너무 어렵게 풀었다..
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (N, M, V, map) => {
  let graph = new Array(N + 1);

  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }

  map.forEach((arr) => {
    let [from, to] = arr;

    graph[from].push(to);
    graph[to].push(from);
  });

  graph.forEach((e) => {
    e.sort((a, b) => a - b);
  });

  let visited = new Array(N + 1).fill(false);
  let ans_dfs = [];
  let ans_bfs = [];

  const dfs = (vertex) => {
    if (visited[vertex]) return;

    visited[vertex] = true;
    ans_dfs.push(vertex);

    for (let i = 0; i < graph[vertex].length; i++) {
      let next = graph[vertex][i];

      if (visited[next] === false) dfs(next);
    }
  };

  const bfs = (vertex) => {
    visited.fill(false);

    let queue = [vertex];

    while (queue.length) {
      let x = queue.shift();
      if (visited[x] === true) continue;

      visited[x] = true;
      ans_bfs.push(x);
      for (let i = 0; i < graph[x].length; i++) {
        let next = graph[x][i];
        if (visited[next] === false) {
          queue.push(next);
        }
      }
    }
  };

  dfs(V);

  bfs(V);

  console.log(ans_dfs.join(' '));
  console.log(ans_bfs.join(' '));
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  const [N, M, V] = input.shift();
  solution(N, M, V, input);
  process.exit();
});

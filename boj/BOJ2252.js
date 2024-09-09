/**
 * Topics : 그래프 이론, 위상 정렬, 방향 비순환 그래프
 *
 * 위상 정렬
 * https://m.blog.naver.com/ndb796/221236874984
 *
 * 시간 복잡도가 O(V + E)로 매우 빠르다.
 * 구현하는 건 크게 어렵지 않았다. 출력을 배열 그대로해서 몇 번 틀렸는데..
 * 스택이나 큐를 이용해서 넣고 빼는 순서만 잘 해주면 크게 어렵지 않다.
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const [N, M] = input[0];
  const graph = Array.from({ length: N + 1 }, () => []);
  const inDegree = Array.from({ length: N + 1 }, (_) => 0);
  const res = [];

  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i];
    graph[a].push(b);
    inDegree[b]++;
  }

  const queue = [];

  for (let i = 1; i <= N; i++) {
    if (!inDegree[i]) queue.push(i);
  }

  while (queue.length) {
    const cur = queue.shift();
    res.push(cur);

    graph[cur].forEach((next) => {
      inDegree[next]--;
      if (!inDegree[next]) queue.push(next);
    });
  }

  console.log(...res);
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  solution(input);
  process.exit();
});

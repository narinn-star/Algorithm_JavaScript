/**
 * Topics : 그래프 이론, 그래프 탐색, 너비 우선 탐색
 *
 * 순서의 중요성,, 근데 이거도 지난번에 틀렸던 거 떠올려서 풀어서 왜 *2를 첫번째로 처리해줘야 하는지 찾아봤다.
 *
 * BFS로 풀이를 하기 위해서는 "모든 간선의 가중치가 동일해야 한다"는 전제 조건이 필요한데, 이 문제에서는
 * 가중치가 0인 간선 ( *2의 경우 )이 있기 때문에 일반적으로 단순한 BFS를 쓸 수 없다.
 * 하지만 문제 특성상 우연히(?) 찾아지는 것....
 *
 * 0-1 BFS, 가중치가 0인 간선에 연결된 정점은 큐의 맨 앞에 넣는 방법으로 풀어내는 것이다.
 * 이것 말고 다익스트라 알고리즘을 사용해서 풀 수 있다고 한다. 🤯
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

const solution = (input) => {
  const [N, K] = input.split(' ').map(Number);

  if (N === K) {
    console.log(0);
    return;
  }

  const queue = [N];
  const visited = new Array(100001).fill(0);
  visited[N] = 1;

  while (queue.length) {
    const q = queue.shift();

    for (let i = 0; i < 3; i++) {
      let tmp = 0;

      if (i === 0) tmp = q * 2;
      else if (i === 1) tmp = q - 1;
      else tmp = q + 1;

      if (tmp < 0 || tmp > visited.length) continue;

      if (q === K) {
        console.log(visited[q] - 1);
        return;
      }

      if (visited[tmp] === 0) {
        if (i === 0) {
          visited[tmp] = visited[q];
        } else {
          visited[tmp] = visited[q] + 1;
        }
        queue.push(tmp);
      }
    }
  }
};

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  solution(input);
  process.exit();
});

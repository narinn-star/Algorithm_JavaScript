/**
 * Topics : 그래프 이론, 그래프 탐색, 너비 우선 탐색
 *
 * 2, 3에서는 없던 경로를 출력하는거라 어떻게 이전 값을 가지고 있을지 고민하다 그냥 넣어주면 되겠구나 했다.
 * 어차피 방문했던 곳을 다시 방문하게 되면 최소값을 찾을 수 없기 때문에 뛰어 넘으면 된다. (값이 덮어씌워질 일이 없다는 것)
 * 그래서 from 배열에 어디서 왔는지의 인덱스 값을 넣어주고 출력할 때 그 배열을 되짚어가면서 res에 담아준 후, 뒤집어서 출력하면 된다.
 *
 * 자바로 풀 땐 stack으로 풀었던데, 그거나 이거나 뭐 ~
 *
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
    console.log(N);
    return;
  }

  const visited = Array.from({ length: 100001 }).fill(0);
  const from = Array.from({ length: 100001 }).fill(0);

  const bfs = () => {
    const queue = [N];
    visited[N] = 1;

    while (queue.length) {
      const q = queue.shift();

      if (q === K) {
        return visited[q] - 1;
      }

      for (let i = 0; i < 3; i++) {
        let tmp = 0;

        if (i === 0) tmp = q + 1;
        else if (i === 1) tmp = q - 1;
        else tmp = q * 2;

        if (tmp < 0 || tmp > visited.length) continue;

        if (visited[tmp] === 0) {
          visited[tmp] = visited[q] + 1;
          from[tmp] = q;
          queue.push(tmp);
        }
      }
    }
  };

  const time = bfs();

  const order = [K];
  let prev = from[K];

  for (let i = 0; i < time; i++) {
    order.push(prev);
    prev = from[prev];
  }

  console.log(time);
  console.log(order.reverse().join(' '));
};

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  solution(input);
  process.exit();
});

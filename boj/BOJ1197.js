const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = ([V, E], graph) => {
  graph = graph.sort((a, b) => a[2] - b[2]);
  const parent = Array.from({ length: V }, (_, i) => i);
  let weight = 0;

  const find = (parent, x) => {
    if (parent[x] === x) return x;
    return (parent[x] = find(parent, parent[x]));
  };

  const union = (parent, a, b) => {
    a = find(parent, a);
    b = find(parent, b);

    if (a < b) parent[b] = a;
    else parent[a] = b;
  };

  const compare = (parent, a, b) => {
    a = find(parent, a);
    b = find(parent, b);

    return a === b;
  };

  for (const [a, b, cost] of graph) {
    if (!compare(parent, a, b)) {
      weight += cost;
      union(parent, a, b);
    }
  }
  return weight;
};

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  console.log(solution(input.shift(), input));
  process.exit();
});

/* Topics : 그래프 이론, 최소 스패닝 트리

Explanation
    
*/

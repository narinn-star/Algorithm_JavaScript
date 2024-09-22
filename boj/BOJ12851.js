/**
 * Topics : 그래프 이론, 그래프 탐색, 너비 우선 탐색
 *
 * 1달 전에 풀 땐 어떻게 풀지 감도 못잡았던 것 같은데, N === K인 경우 빼고 해내서(?) 뿌듯했댜,, 🥹
 * 카운팅을 어떻게 해줄까, 어제랑 비슷하게 고민했다. 계속 올려주면 한없이 올라가니까 값이 바로 망가지기 때문
 * 그래서 visited를 boolean이 아닌, Number로 두고 해당 칸에 시간을 계속 담아두기로 했다.
 *
 * 처음엔 for문 없이 그냥 if문 세개로 했는데, 그럼 매번 min값을 갱신해주는 코드나 visited를 갱신해주는 코드나 모두 불필요하게 반복돼서
 * 그냥 for문 넣고, tmp값으로 인덱스 처리를 모두 해줬다.
 *
 * 훨씬 간결해졌조 ?? 근데 시간이 넘 오래 걸림.. 왜징 ㅇㅅㅇ
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
    console.log(1);
    return;
  }

  const queue = [N];
  const visited = Array.from({ length: 1000002 }).fill(0);
  visited[N] = 1;

  let min = Number.MAX_SAFE_INTEGER;
  let count = 0;

  while (queue.length) {
    const q = queue.shift();

    if (min < visited[q]) break;

    for (let i = 0; i < 3; i++) {
      let tmp = 0;

      if (i === 0) tmp = q + 1;
      else if (i === 1) tmp = q - 1;
      else tmp = q * 2;

      if (tmp >= 0 && tmp < visited.length) {
        if (tmp === K) {
          min = visited[q];
          count++;
        }

        if (visited[tmp] === 0 || visited[tmp] === visited[q] + 1) {
          visited[tmp] = visited[q] + 1;
          queue.push(tmp);
        }
      }
    }
  }

  console.log(min);
  console.log(count);
};

rl.on('line', function (line) {
  input = line;
}).on('close', function () {
  solution(input);
  process.exit();
});

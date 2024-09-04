const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const [N, K] = input[0].split(' ').map(Number);
  const use = input[1].split(' ').map(Number);

  const plug = [];

  while (plug.length < N) {
    const num = use.shift();

    if (!plug.includes(num)) plug.push(num);
  }

  let ans = 0;
  while (use.length !== 0) {
    const item = use.shift();

    if (plug.includes(item)) continue;

    const order = plug.map((_, idx) => [idx, Infinity]);

    for (let i = 0; i < N; i++) {
      const tmp = plug[i];
      for (let j = 0; j < use.length; j++) {
        if (use[j] === tmp && order[i][1] > j) {
          order[i][1] = j;
        }
      }
    }

    const changeIdx = order.sort((a, b) => b[1] - a[1])[0][0];
    plug[changeIdx] = item;
    ans++;
  }

  return ans;
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

/* Topics : 그리디 알고리즘

Explanation

너무 어려웠다..
남은 전기 용품을 다 돌아도 되는 것인가에 처음 고민이 되었고, '돌지 말자'라는 결론을 내리고 나서부터 규칙을 찾기 시작했다.
그래서 각 용품의 갯수도 세어보고, 갯수별 정렬도 해봤는데 그건 말이 안되는 방법이었음.. ㅠ

풀이 방법을 검색했는데 '가장 늦게 쓰이거나, 나중에 쓰이지 않는 물건의 플러그를 빼야한다.'라는 것에서 힌트를 얻었다.
즉, 멀티탭에 꽂혀있는 전기용품이 이후에 언제 다시 쓰이는지 값으로 가지는 배열을 만들고, 
가장 늦게 사용되거나 다시 사용되지 않는 물건을 골라 플러그에서 빼고 해당 자리에 새로운 전기 용품을 꽂는다.

움,, 어려웡
*/

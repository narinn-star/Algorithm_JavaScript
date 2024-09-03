const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

const solution = (input) => {
  const [N, K] = input[0].split(' ').map(Number);
  const words = input.splice(1);

  if (K < 5) return 0;

  const set = new Set(['a', 'n', 't', 'i', 'c']);
  let res = 0;

  const countWord = (start, index) => {
    if (index === K - 5) {
      let flag;
      let cnt = 0;

      for (const word of words) {
        flag = true;
        for (const c of word) {
          if (!set.has(c)) {
            flag = false;
            break;
          }
        }
        if (flag) cnt++;
      }

      res = Math.max(cnt, res);

      return;
    }

    for (let i = start; i < 26; i++) {
      let char = String.fromCharCode(i + 'a'.charCodeAt());
      if (set.has(char)) continue;
      set.add(char);
      countWord(i + 1, index + 1);
      set.delete(char);
    }
  };

  countWord(0, 0);

  return res;
};

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});

/* Topics : 브루트포스 알고리즘, 비트마스킹, 백트래킹

Explanation

anta/tica에 속하는 알파벳은 무조건 배워야 어떤 단어든 읽을 수 있기 때문에 애초에 5개 미만의 알파벳을 배우게 된다면 어떤 단어도 읽을 수 없기 때문에 0을 리턴했다.
그리고 나머지는 백트래킹으로 갯수를 세어줬다. 
백트래킹 아이디어를 떠올린 건 검색을 하다 '되돌아 가야한다'는 것을 발견해서였다.
set에 넣어 체크를 해주려고 했는데, 한 바퀴 돌고 나면 이전 값이 모두 사라져 다시 탐색할 수 없기 때문에 백트래킹이 적절하다 생각했다.
모든 데이터를 계속 가지고 있으면서 탐색할 수 있기 떄문이다.

알파벳이 26개라서 26번 계속 반복해줘야했다. (이 때 왜 N이 50개까지 인지 이해함과 동시에 백트래킹이 맞다 생각했다.)
이미 셋에 있는 문자열이라면 탐색해줄 필요가 없으므로 넘기고, 그렇지 않으면 셋에 추가해준 후 재귀호출을 해준다. 해당 재귀를 돌고 오면 셋에 추가했던 걸 다시 빼주면 된다.

배울 수 있는 알파벳 수에서 이미 알아야 하는 수 5개를 뺀 갯수와 깊이(?)를 의미하는 index값이 같으면 다음을 수행한다.

배운 알파벳으로 읽을 수 있는 단어인가를 체크하는 것이 set에 단어의 알파벳 하나가 있는 지 확인하는 것이다. 그렇지 않으면 false, 그렇지 않으면 초기화해뒀던 true가 된다.
한 단어를 모두 돌고나면 해당 단어를 읽을 수 있는지 없는지를 판별해주면 된다. 우리는 최대한 많은 단어를 읽어야하기 때문에 max값을 계속 갱신해주었다.

풀 때는 꽤나 고민을 많이 했는데, 적고나니 쉬워보이는 이상한 ,,,😅

*/

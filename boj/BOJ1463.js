const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
const solution = (input) => {
  let dp = Array(input).fill(0);

  dp[1] = 0;
  dp[2] = 1;

  for (let i = 3; i <= input; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
    }
    if (i % 2 == 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
    }
  }
  console.log(dp[input]);
  //  Math.min()
};

rl.on('line', function (line) {
  input = +line; // 입력받은 문자열, line // 형변환, parseInt
  rl.close(); // 입력 종료
}).on('close', function () {
  solution(input); // 문제 풀이 함수 호출
  process.exit(); // 프로세스 종료
});

/* Topics : 다이나믹 프로그래밍

Explanation
처음에 if - elseif로 했었는데 틀렸다. 당연한 거였지만.. 3으로 나눴을 때 2로 나눴을 때 -1했을 때의 값 모두 비교해서
최솟값을 구해야하기 때문에 if elseif가 아닌 if if .. 로 해야한다. 
-1을 한 경우를 맨 처음으로 올린 이유는 어차피 지나가야하는 길이기도 하고, 처음 들어갈 때는 dp[i]가 0으로 채워져있기 때문에
비교하지 않고 바로 값을 넣어야하기 때문이다. 만약에 if(i % 3 !== 0 && i % 2 !== 0)이라고 조건을 달아둔다면
애초에 dp 배열을 maxvalue로 초기화하는 등의 방법을 사용해야한다. 그게 그거임..ㅎ

예전부터 많이 풀어봤던 문제인데, 사실 이렇게 한 번에 이해하고? 풀이한 건 처음인 것 같은.. 아님말공

*/

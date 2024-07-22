/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

/* Topics : Array, Stack, Monotonic Stack

Explanation
처음에 떠올린 풀이법은 브루트포스로, 왜 medium인지 의문을 가질만큼 쉽다고 생각했다. 정답이 나오는 건 똑같지만 당연히 시간초과가 나왔다.
그렇다는 것은, 다른 방법이 있다는 건데 정말이지 너무 모르겠어서 Topic을 먼저 펼쳐봤는데 Monotonic Stack이라는 것이 나왔다.
스택은 스택인데, increasing/decreasing을 유지하는 스택이라고 한다. 단조 스택.. 오르고 있거나 내려가고 있거나 둘 중 하나.

입력받은 온도들을 뒤에서부터 탐색하면서 스택에 온도의 인덱스를 관리하는 것을 stack으로 두고, 결과를 담을 배열 res 두개를 선언했다.
stack에 값이 없다면 그냥 스택에 해당 인덱스(i)값을 넣는다.
stack에 값이 있을 때는 다음 두가지로 나뉜다.
- 먼저, while 반복을 하는데 이때 한 가지 조건이 더 있다. 스택의 top에 있는 값을 인덱스로 가지는 온도가 현재 온도보다 낮아야 한다.
즉, 오늘의 온도보다 내일/모레/또는 더 나중의 날의 온도가 더 낮으면 문제에서 요구하는 것과 달라지기 때문에 스택에 들어있는 인덱스를 하나씩 뽑아준다.
스택이 비거나, 조건에 부합하지 않으면 while문을 탈출한다.
- 위의 while 반복을 나오고 나서도 스택에 값이 남아있다면 res[i]에 (오늘에 해당하는 결과) stack의 top 값 - i (날짜 계산)를 담아준다.
그리고 나서 다시 i를 스택에 넣어준다.

0까지 반복하면 된다.


*/

const dailyTemperatures = function (temperatures) {
  const LENGTH = temperatures.length;

  //   let res = [];

  //   for (let i = 0; i < LENGTH; i++) {
  //     let cnt = 1;
  //     for (let j = i + 1; j < LENGTH; j++) {
  //       if (temperatures[i] >= temperatures[j]) {
  //         cnt++;
  //       } else {
  //         res.push(cnt);
  //         console.log('i: ', i);
  //         break;
  //       }

  //       if (j === LENGTH - 1 && cnt > 1) res.push(0);
  //     }
  //   }

  //   res.push(0);
  let stack = [];
  let res = new Array(LENGTH).fill(0);

  for (let i = LENGTH - 1; i >= 0; i--) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }

    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }

  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

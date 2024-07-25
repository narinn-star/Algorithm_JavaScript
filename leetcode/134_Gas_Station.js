/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

/* Topics : Array, Greedy

Explanation
첫 시도
: start를 찾고, 새로운 배열을 만들어 (circuit 해야하니까 ..) 다시 반복문을 돌면서 다 못돌면 -1, 돌 수 있으면 해당 start를 반환했다.
사실 어거지로 풀어서 정확하게 증명? 설명? 하라고 하면 잘 못하겠기도 했다. 어차피 시간초과나서 다 엎어야하긴 했지만..

시간초과가 나서, 이중 반복문은 바로 안되겠다 싶었다. 한 번에 돌면서 찾아야하는데, circuit인데 어떻게 한 번에 도는가에 대해서 엄청 오래 고민했다.
친구 찬스를 조금 써서, gas와 cost의 차를 가지고 접근할 수 있었다. 이거 아니었으면 아직 못풀었을 듯 싶음

예제를 잘 참고해야하는 문제였기도 하다. 중간중간 틀리면서 테케를 하나씩 더 얻어서 참고했다.
그중 하나가 다음 예제다.
gas = [5, 1, 2, 3, 4], cost = [4, 4, 1, 5, 1]
차 배열 = [1, -3, 1, -2, 3]

// i == 0) start = 0, sum = 1 => start = i
// i == 1) start = 0, sum = -2 => start = i + 1
// i == 2) start = 2, sum = -1 => start = i + 1
// i == 3) start = 3, sum = -3 => start = i + 1
// i == 4) start = 4, sum = 0 => start = i

이건.. 발견에 가까운 풀이긴 하다. ㅠㅠㅠ 
어찌저찌 풀긴 했슴...
*/

const canCompleteCircuit = (gas, cost) => {
  let res = Array(gas.length).fill(0);

  let sum = 0;
  let curSum = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    res[i] = gas[i] - cost[i];

    curSum += res[i];
    sum += res[i];

    if (curSum < 0) {
      start = i + 1;
      curSum = 0;
    }
  }

  if (sum < 0) return -1;
  else return start;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));

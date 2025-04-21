/**
 * Topics: Array, Stack, Sorting, Monotonic Stack
 *
 * 도대체 감을 못잡아서 다른 풀이를 보고 이해하기로 함..
 * Monotonic Stack이 도대체 뭐냐..? increasing/decreasing이 유지되는 스택이래
 * 근데 내가 갖고있는 배열들은 전혀 단조롭지 못해서 이거 뭘 어떻게 해줘야하나 싶었음
 *
 * 근데 아마 for문을 도는 방식이 decreasing방식이라 Monotonic Stack이라고 붙여둔게 아닌가 싶었다.
 * 각 차들이 목적지까지 가는데 걸리는 시간을 구해두고, 그 시간을 target - 1부터 돌면서 fleet이 되는지 되지 않는지 확인한다.
 * 이게 다야 ..ㅜㅜ
 *
 */
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, position, speed) => {
  const timeArr = [];

  for (let i = 0; i < position.length; i++) {
    timeArr[position[i]] = (target - position[i]) / speed[i];
  }

  let prev = 0;
  let res = 0;
  for (let i = target - 1; i >= 0; i--) {
    const cur = timeArr[i];
    if (cur > prev) {
      prev = cur;
      res++;
    }
  }
  return res;
};

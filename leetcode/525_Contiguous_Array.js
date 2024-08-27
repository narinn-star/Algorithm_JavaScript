/**
 * @param {number[]} nums
 * @return {number}
 */

/* Topics : Array, Hash Table, Prefix Sum

Explanation
문제가 너무 모호해요.. 0, 1의 갯수가 같은, 가장 큰 범위를 찾는 문제라고 보는게 더 쉽겠다.
나는 0, 1이 반복되어야하는 줄 알았고, 그 다음엔 갯수만 같으면 되는 줄 알았다.. 계속 제출하면서
새로운 테케를 받아보면서 겨우 문제를 이해했다.

이미 저장된 합과 같아지는 지점이 있다면, 이미 저장된 합의 다음 값부터 현재까지의 값을 더한게 0이라는 뜻이므로,
이때 max값을 갱신해주고 map에 합이 없다면 추가한다.

로직은 이게 다인데 넘어렵😭

*/

const findMaxLength = (nums) => {
  let max = 0;
  let sum = 0;

  let map = new Map();
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) sum -= 1;
    else sum += 1;

    if (map.has(sum)) max = Math.max(max, i - map.get(sum));
    else map.set(sum, i);
  }

  return max;
};

console.log(findMaxLength([0, 1]));
console.log(findMaxLength([0, 1, 0]));

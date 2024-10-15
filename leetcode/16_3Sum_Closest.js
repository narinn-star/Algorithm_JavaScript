/**
 * Topics: Array, Two Pointers, Sorting
 *
 * 총 세가지로 풀었다.
 *
 * 1. 백트래킹
 * 세가지 합을 모두 돌아봐야하니까 백트래킹으로 풀어보자 생각해서 풀었다. 진짜 잘 풀었는데(내 생각엔) 바로 시간초과가 났다.
 * 로직이 복잡하진 않으니까 내부 코드 설명은 생략
 *
 * 2. 3중 for loop
 * 어차피 3개 합으로 정해져있으니까 3중 for loop을 돌려버렸다.
 * 통과는 됨.. 그렇지만 너무 양심에 찔린 나머지 그냥 덮었다.
 *
 * 3. Two Pointer
 * 처음에 백트래킹 틀리고 뭐지 싶어서 Topic을 까봤는데 투포인터였음.. 근데 사실 이걸 투포인터로 어떻게 풀지? 싶었고
 * 처음에 백트래킹으로 풀기 전에 오름차순으로 정렬했을 때 어떻게 오름차순으로 해도 이게 성립이 되는지 이해가 안가서 백트래킹을 선택한건데
 * 그냥 너무나 당연한 거였다는 점 ~
 *
 * 오름차순으로 정렬해두고 첫 sum은 초기화한 상태로 시작한다. 뒤에서 sum 비교할 때 이것부터 해봐야하니까.
 * 그리고 세 합을 nums[i], nums[left], nums[right]의 합으로 했다. 하나는 고정해두고 (i), left와 right로 쭉쭉 해보고
 * i가 증가하면 다시 left, right를 설정해서 다시 또 돌고..
 * 그러다 target값과 맞아떨어지면 바로 탈출하고, 아닐때는 left, right를 적절히 증감시켜주면 된다.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const threeSumClosest = (nums, target) => {
  const visited = Array.from({ length: nums.length }).fill(false);

  let res = null;
  let arr = [];

  const sumReducer = (acc, cur) => {
    return acc + cur;
  };

  const dfs = (depth) => {
    if (depth === 3) {
      const sum = arr.reduce(sumReducer);
      if (res === null) res = sum;
      else res = Math.abs(target - sum) > Math.abs(target - res) ? res : sum;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      arr.push(nums[i]);
      visited[i] = true;
      dfs(depth + 1);
      arr.pop();
      visited[i] = false;
    }
  };

  dfs(0);

  return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const threeSumClosest1 = (nums, target) => {
  let res = Number.MAX_SAFE_INTEGER;
  let diff = Number.MAX_SAFE_INTEGER;
  const length = nums.length;

  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let curDiff = Math.abs(sum - target);

        if (curDiff < diff) {
          diff = curDiff;
          res = sum;
        }
      }
    }
  }

  return res;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const threeSumClosest2 = (nums, target) => {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let sum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < len; i++) {
    let left = i + 1,
      right = len - 1;

    while (left < right) {
      let curSum = nums[i] + nums[left] + nums[right];

      if (curSum === target) return curSum;
      else if (curSum < target) left++;
      else right--;

      if (Math.abs(curSum - target) < Math.abs(sum - target)) sum = curSum;
    }
  }

  return sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Topics : Array, Dynamic Programming
 *
 * Explanation
 * 너무 어려워요 ,, 🫠
 * 두 가지 방법을 사용했다.
 * 1. dp
 * 앞에서부터 값을 쌓아가는데, 두가지 값을 쌓아간다.
 * 어쩌면 최솟값에 현재 값을 곱했을 때 최댓값이 만들어질 수도 있기 때문이다.
 * 그래서 현재값, 최댓값 * 현재값, 최솟값 * 현재값 세 가지 값 중 가장 큰 값을 max에, 가장 작은 값을 min에 저장한다.
 *
 * 2. 반복문
 * 문제의 관건은 음수이다. 음수가 짝수개일 때는 무조건 모두 곱하는 것이 가장 큰 값일것이고,
 * 음수가 홀수개일 때는 마지막 음수값 이전까지 곱하는 것이 가장 큰 값일것이다.
 * 하지만 음수는 여기저기 흩어져있을 수 있기 때문에, 앞에서부터 마지막 음수 전까지와 뒤에서부터 첫번째 음수 전까지의 값을 구해서
 * 비교한 다음 가장 큰 값을 리턴한다.
 *
 * 두번째 방법이 좀 더 접근하기도, 생각해내기도 쉬웠다. 첫번째 방법도 얻어걸리긴 했지만 시간을 정말 많이씀..
 *
 */

const maxProduct = (nums) => {
  let max = nums[0];
  let min = nums[0];
  let res = max;

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]; // 현재 값

    let tmpMax = Math.max(num, max * num, min * num);

    min = Math.min(num, max * num, min * num);

    max = tmpMax;

    res = Math.max(max, res);
  }

  return res;
};

// var maxProduct = (nums) => {
//   let pro = 1,
//     max = nums[0];
//
//   for (let i = 0; i < nums.length; i++) {
//     pro = pro * nums[i];
//     if (max < pro) max = pro;
//     if (pro == 0) pro = 1;
//   }
//
//   pro = 1;
//
//   for (let i = nums.length - 1; i >= 0; i--) {
//     pro = pro * nums[i];
//     if (max < pro) max = pro;
//     if (pro == 0) pro = 1;
//   }
//   return max;
// };

console.log(maxProduct([2, 3, -2, 4]));

// ex [2, 3, -2, 4, -1]

// 큰거  [2, 6, -6, -24, 48]
// 작은거 [2, 3, -12, -48, 24]

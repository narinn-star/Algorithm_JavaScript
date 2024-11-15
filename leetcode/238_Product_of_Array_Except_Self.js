/**
 * Topics: Array, Prefix Sum
 *
 * 1. 0의 갯수에 따라 총곱에서 나눌 것인지 아닌지를 결정
 * 0의 갯수가 2개 이상이면 무조건 곱이 0이 되기 때문에 바로 리턴해주고, 1개이거나 0개인 경우엔 다시 반복문을 돌면서 체크했다.
 * 0이 있을 땐 0을 제외한 곱은 무조건 모두 합한 곱이지만 0을 제외하지 않은 나머지는 무조건 0이 된다.
 * 0이 없을 땐 초기에 구해뒀던 sum에 nums[i]를 나눠주면 된다.
 *
 * 그런데 나누기 쓰지 마라고 되어있네??? "without using the division operation" 🫢
 * 자바로 풀다가 포기했던 문제인데, 한참 보다가 그냥 답 봤어요. 모르겠더라고 ~ 구간합 찾아봐도 이거랑 뭔가 다른 느낌이었슴..
 *
 * 2. 왼쪽부터 곱해주고 오른쪽부터 곱해오는..
 * 이게 되네?
 * 왼쪽부터 곱한 수들을 먼저 res에 넣어두고, 오른쪽에서부터 다시 되돌아오면서 res에 곱해주는 건데
 * 예시로 봐야 더 직관적이고 이해가 간다. (근데 떠올리기는 쉽지 않을 것 같다..)
 * nums = [1, 2, 3, 4]
 * res = [1, 1, 2, 6] // 첫번째 for loop 이후
 * res = [24, 12, 8, 6] // 두번째 for loop 이후
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  let sum = 1;
  let zero = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) sum *= nums[i];
    else zero.push(i);
  }

  if (zero.length >= 2) return Array.from(nums.length).fill(0);

  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (zero.length === 1) {
      if (nums[i] === 0) res.push(sum);
      else {
        res.push(0);
      }
    } else {
      res.push(parseInt(sum / nums[i]));
    }
  }

  return res;
};

const productExceptSelf2 = (nums) => {
  const len = nums.length;
  const res = new Array(len);

  res[0] = 1; // 첫번째 요소는 1
  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let rightProd = 1;
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= rightProd;
    rightProd *= nums[i];
  }

  return res;
};

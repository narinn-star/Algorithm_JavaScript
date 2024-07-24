/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* Topics : Array, Two Pointers

Explanation
순열 알고리즘
1. 뒤에서부터 nums[i] < nums[i + 1]인 것을 찾아 pivot을 i로 지정한다.
2. 뒤에서부터 pivot + 1까지의 수 중, nums[pivot]보다 크면서 가장 작은 수를 찾는다. (nums[j])
3. nums[j]와 nums[pivot] 자리를 swap한다.
4. pivot부터 맨 뒤까지 오름차순으로 정렬한 것과
5. pivot 앞의 기존 배열을 합친다.

+) 초기 nums가 내림차순이라면 1~5번에서 아무것도 적용되지 않으므로 오름차순으로 정렬해 리턴한다.


*/
const nextPermutation = (nums) => {
  // 1.
  // 들어온 Nums 정렬하고
  // 백트래킹으로 순열 구하고
  // 하나씩 뒤져보기
  // 2.
  // if nums가 내림차순이랑 같으면 오름차순 반환하고 끝
  // else
  // 정렬하고
  // 순열 구하면서 nums랑 계속 비교
  // 같으면 그 다음 한 번만 더 돌고 끝내기

  // 3.
  // 다음 순열 알고리즘 ^^..?
  let res = null;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      let pivot = i;

      for (let j = nums.length - 1; j > i; j--) {
        if (nums[pivot] < nums[j]) {
          swap(nums, pivot, j);
          res = nums.slice(pivot + 1);
          res.sort((a, b) => a - b);

          nums = nums.slice(0, pivot + 1).concat(res);

          console.log('1: ', nums);
          return nums;
        }
      }
    }
  }
  nums.sort((a, b) => a - b);
  console.log('2: ', nums);
  return nums;
};

const swap = (nums, pivot, j) => {
  let tmp = nums[pivot];
  nums[pivot] = nums[j];
  nums[j] = tmp;
};

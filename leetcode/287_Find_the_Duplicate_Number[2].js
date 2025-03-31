/**
 * Topics: Array, Two Pointers, Binary Search, Bit Manipulation
 *
 * 풀이 comments 참고
 *
 * 저번에 풀었던거랑 비교했을 때, 시간은 O(n)으로 동일한데 이번거는 공간을 더 사용하지 않은거라 문제에서 의도한 풀이는 이게 맞는듯..
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  let slow2 = nums[0];

  while (slow !== slow2) {
    slow = nums[slow];
    slow2 = nums[slow2];
  }

  return slow;
};

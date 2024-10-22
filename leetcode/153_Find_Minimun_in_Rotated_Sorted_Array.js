/**
 * Topics: Array, Binary Search
 *
 * 간단한 이분탐색 문제다. 그냥 찾아버리면 되는거 아닌가~하는 생각을 했는데 일단 그러려면 medium도 아닐테고, 시간복잡도도 O(log n)으로 끊을 수 없다.
 * 그래서 바로 이분탐색을 선택했다.
 * 처음엔 바로 뒷자리와 앞자리만 비교해서 end, start값을 바꾸는 방식으로 접근했다.
 * 그렇게 하면 문제점이 2 3 4 5 1 일 때이다. 첫 mid값은 4인데, 1을 찾으려면 뒤로 옮겨야하는데 그렇게 할 방법이 없다.
 * 그래서 가장 뒷자리와 비교를 했다. 4와 1을 비교했을 때 1이 작기때문에 start값을 mid + 1로 바꿔주고,
 * 만약 11 13 14 15 17이라면 14와 17을 비교했을 때 17이 크기때문에 end값을 mid로 바꾸고 이를 반복하면 된다.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  while (end > start) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return nums[start];
};

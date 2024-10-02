/**
 * Topics: Array, String, Greedy, Sorting
 *
 * 정렬만 잘 하면 될 것 같았는데 너무 어려웠다.
 * 정렬 규칙을 찾았는데 숫자인 상태로 하면 대참사가 날 것 같아서 문자열로 생각했다.
 * 비교하는 두 수를 붙였을 때 큰 값을 반환하도록하니까 그냥 됨 ... 그냥.. 돼버림 ㅠㅠ
 *
 * [0, 0] 일 경우엔 00이 아니라 0을 반환해야하기 때문에 처음에 every 함수로 걸러내줬다.
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  if (nums.every((n) => n === 0)) return '0';

  nums.sort((a, b) => {
    let strA = a.toString();
    let strB = b.toString();

    return parseInt(strA + strB) > parseInt(strB + strA) ? -1 : 1;
  });

  return nums.join('');
};

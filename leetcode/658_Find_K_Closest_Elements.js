/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

/**
 * Topics : Array, Math, Two Pointers
 *
 * Problem
 * 정렬된 배열이 주어졌을 때, 배열에서 x에 가장 가까운 k개 정수를 반환한다. (오름차순)
 * 다음 두가지 경우, a가 b보다 x에 가깝다.
 * - |a - x| < |b - x|이거나 (ex. a = -2, b = 7, x = 2)
 * - |a - x| == |b - x| and a < b일 때 (ex. a = -5, b = 9, x = 2)
 *
 * Explanation
 * 슬라이딩 윈도우를 사용했다. 절댓값의 차를 구한 수를 저장해두고,
 * 그 수가 0 이상이면서 맨앞/맨뒤 값을 비교해 탈출문을 작성했다.
 * break되지 않으면 맨 앞 숫자는 빼주고 마지막 수를 넣은 후 다시 반복한다.
 */

const findClosestElements = (arr, k, x) => {
  let res = [];

  for (let i = 0; i < k; i++) {
    res.push(arr[i]);
  }

  for (let i = k; i < arr.length; i++) {
    let num = Math.abs(arr[i] - x) - Math.abs(res[0] - x);

    if (0 <= num && res[0] < arr[i]) break;

    res.shift();
    res.push(arr[i]);
  }

  return res;
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));

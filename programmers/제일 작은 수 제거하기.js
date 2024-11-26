/**
 * Topic: 연습문제
 *
 * 이렇게 쉬운 문제도 다른 사람 풀이 보면 기가 팍죽어버려 ㅠㅠㅠ
 * 그냥 indexOf 사용하신 분도 있고, spread -> Math.min -> filter 사용하신 분도 있고..
 * 🤯
 */

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

function solution(arr) {
  if (arr.length === 1) return [-1];

  let min = Infinity;
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      idx = i;
    }
  }

  arr.splice(idx, 1);
  return arr;
}

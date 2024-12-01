/**
 * Topic: 연습문제
 *
 * 최소공배수 구하는 문제
 * 유클리드 호제법 알아보러감
 */
/**
 * @param {number[]} arr
 * @returns {number}
 */
function solution(arr) {
  while (arr.length > 1) {
    const a = arr.shift();
    const b = arr.shift();
    let lcm = 1;
    while (true) {
      if (a % lcm === 0 && b % lcm === 0) break;
      lcm++;
    }
    arr.push(lcm);
  }

  return arr[0];
}

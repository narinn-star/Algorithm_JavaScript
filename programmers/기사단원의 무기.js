/**
 * Topics: 연습문제
 *
 * 처음엔 j를 i까지 for loop 돌렸는데 시간초과가 났다..
 * 그래서 Math.sqrt(i)까지로 반복 수를 줄이고, i / j가 j일 때는 하나, 그렇지 않은 경우는 2개 더한다.
 *
 * 약수 개수만 찾으면 되는 문제.
 */
/**
 *
 * @param {number} number
 * @param {number} limit
 * @param {number} power
 * @returns {number}
 */
function solution(number, limit, power) {
  let cnt = 0;
  let total = 0;

  for (let i = 1; i <= number; i++) {
    cnt = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) cnt += 1;
        else cnt += 2;
      }
    }

    if (cnt > limit) {
      total += power;
    } else {
      total += cnt;
    }
  }

  return total;
}

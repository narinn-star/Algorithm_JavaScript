/**
 * Topic: 연습문제
 */
/**
 * @param {number} x
 * @param {number} y
 * @param {number} n
 * @returns {number}
 */
function solution(x, y, n) {
  let ans = -1;
  const arr = [[y, 0]];

  while (arr.length) {
    const [num, i] = arr.shift();

    if (num === x) return i;

    if (num % 2 === 0 && num / 2 >= x) arr.push([num / 2, i + 1]);
    if (num % 3 === 0 && num / 3 >= x) arr.push([num / 3, i + 1]);
    if (num - n >= x) arr.push([num - n, i + 1]);
  }

  return -1;
}

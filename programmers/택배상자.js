/**
 * Topic: 연습문제
 */
/**
 * @param {number[]} order
 * @returns {number}
 */

function solution(order) {
  let res = 0;
  const box = [];

  for (let i = 1; i <= order.length; i++) {
    box.push(i);

    while (box.length !== 0 && box.at(-1) === order[res]) {
      box.pop();
      res++;
    }
  }

  return res;
}

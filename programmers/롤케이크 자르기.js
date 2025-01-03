/**
 * Topic: 연습문제
 */
/**
 * @param {number[]} topping
 * @returns {number}
 */
function solution(topping) {
  let cnt = 0;
  const length = topping.length;

  const left = new Map();
  const right = new Map();

  for (let i = 0; i < length; i++) {
    right.set(topping[i], (right.get(topping[i]) || 0) + 1);
  }

  for (let i = 0; i < length; i++) {
    right.set(topping[i], right.get(topping[i]) - 1);
    if (right.get(topping[i]) === 0) right.delete(topping[i]);

    left.set(topping[i], (left.get(topping[i]) || 0) + 1);

    if (right.size === left.size) cnt++;
  }

  return cnt;
}

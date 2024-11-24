/**
 * Topic: 위클리 챌린지
 */
/**
 *
 * @param {number} price
 * @param {number} money
 * @param {number} count
 * @returns {number}
 */
function solution(price, money, count) {
  let totalPrice = 0;

  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  return money > totalPrice ? 0 : totalPrice - money;
}

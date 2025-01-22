/**
 * Topics: Array, Dynamic Programming
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  const length = prices.length;
  let buyPrice = prices[0];
  let max = 0;

  for (let i = 1; i < length; i++) {
    if (buyPrice > prices[i]) buyPrice = prices[i];

    max = Math.max(max, prices[i] - buyPrice);
  }

  return max;
};

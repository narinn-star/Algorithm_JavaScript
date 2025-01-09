/**
 * Topic: 스택/큐
 *
 * N^2로 그냥 풀리는데 왜..지?
 *
 */
/**
 * @param {number[]} prices
 * @returns {number[]}
 */
function solution(prices) {
  const length = prices.length;
  const ans = [];
  for (let i = 0; i < length; i++) {
    let stack = 0;
    for (let j = i + 1; j < length; j++) {
      stack++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    ans.push(stack);
  }
  return ans;
}

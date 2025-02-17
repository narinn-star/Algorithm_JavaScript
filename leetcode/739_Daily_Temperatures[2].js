/**
 * Topics: Array, Stack, Monotonic Stack
 */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const LENGTH = temperatures.length;
  const stack = [];
  const ans = Array(temperatures.length).fill(0);

  for (let i = 1; i < LENGTH; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let idx = stack.pop();
      ans[idx] = i - idx;
    }
    stack.push(i);
  }

  return ans;
};

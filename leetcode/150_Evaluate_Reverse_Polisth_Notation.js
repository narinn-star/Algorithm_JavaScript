/**
 * Topics: Array, Math, Stack
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const numStack = [];

  tokens.forEach((token) => {
    if (!isNaN(token)) {
      numStack.push(Number(token));
    } else {
      const b = numStack.pop();
      const a = numStack.pop();
      switch (token) {
        case '+':
          numStack.push(a + b);
          break;
        case '-':
          numStack.push(a - b);
          break;
        case '/':
          numStack.push(Math.trunc(a / b));
          break;
        case '*':
          numStack.push(a * b);
          break;
      }
    }
  });

  return numStack[0];
};

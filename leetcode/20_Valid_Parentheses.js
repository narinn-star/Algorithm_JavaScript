/**
 * Topics: String, Stack
 *
 * forEach는 중간에 중단이 안되지롱..
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = [];

  for (let ch of s) {
    if (ch === '(' || ch === '[' || ch == '{') stack.push(ch);
    else if (ch === ')') {
      if (stack.pop() !== '(') return false;
    } else if (ch === ']') {
      if (stack.pop() !== '[') return false;
    } else if (ch === '}') {
      if (stack.pop() !== '{') return false;
    }
  }

  return stack.length === 0;
};

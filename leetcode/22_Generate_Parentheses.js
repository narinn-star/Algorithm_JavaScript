/**
 * Topics : String, Dynamic Programming, Backtracking
 *
 * Explanation
 *
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  let stack = [];

  const backtrack = (parenthesis, open, close) => {
    if (parenthesis.length === n * 2) stack.push(parenthesis);

    if (open < n) {
      backtrack(parenthesis + '(', open + 1, close);
    }
    if (close < open) {
      backtrack(parenthesis + ')', open, close + 1);
    }
  };

  backtrack('', 0, 0);

  return stack;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(1));

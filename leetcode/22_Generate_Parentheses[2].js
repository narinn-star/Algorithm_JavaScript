/**
 * Topics: String, Dynamic Programming, Backtracking
 *
 * res에 가능한 경우의 괄호모음들을 넣으면서 열림 괄호, 닫힘 괄호를 초과되지 않도록 하는 선에서 계속 반복한다.
 *
 * n = 3일 때
 * 열림 괄호 하나만 있다면 또 다시 열림 괄호가 오거나, 닫힘 괄호 하나가 올 수 있다.
 * 열림 괄호 두개가 있다면 또 다시 열림 괄호가 오거나, 닫힘 괄호 하나가 올 수 있다.
 * 열림 괄호 하나와 닫힘 괄호 하나씩 있다면 close < open에서 닫힘 괄호가 올 경우를 막아주기 때문에 올바른 괄호 쌍들만 모을 수 있다.
 *
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const parentheses = [];

  const backtracking = (res, open, close) => {
    if (n * 2 === res.length) parentheses.push(res);

    if (open < n) backtracking(res + '(', open + 1, close);
    if (close < open) backtracking(res + ')', open, close + 1);
  };

  backtracking('', 0, 0);

  return parentheses;
};

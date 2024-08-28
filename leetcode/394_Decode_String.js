/**
 * Topics : String, Stack, Recursion
 *
 * Problem
 *
 *
 * Explanation
 * 스택 이용하는 건 알겠는데.. 어느시점에 어떻게 해줘야할지 고민을 꽤나 했다.
 * 그냥 하나씩 나눠서 처리하기로 했다. 숫자일 때, 알파벳일 때, '['일 때, ']'일 때 총 네가지로 나뉘며
 * 닫는 괄호일 때 문자열을 쌓아주는 로직이 가장 중요하다.
 * 자바스크립트에 스택은 따로 없어 마지막 값, 그러니까 stack.peek()은 stack.length -1으로 접근해야해서 조금 지저분하긴 하다.
 * numStack에 들어있는 만큼 res에 붙여주고, alphaStack에 넣어뒀던 이전 계산된(?) 것과 합쳐준다.
 * res에 담겨있는 값이 어떻게 변화하는지, 어디서 초기화되는지가 중요하다.
 */

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  let res = '';
  let alphaStack = [];
  let numStack = [];
  let tmpNum = 0;

  for (let a = 0; a < s.length; a++) {
    let c = s[a];
    if (!isNaN(c)) {
      tmpNum = tmpNum * 10 + parseInt(c);
    } else if (c <= 'z' && c >= 'a') {
      res += c;
    } else if (c === '[') {
      alphaStack.push(res);
      numStack.push(tmpNum);
      tmpNum = 0;
      res = '';
    } else if (c === ']') {
      let tmpString = res;
      for (let i = 0; i < numStack[numStack.length - 1] - 1; i++) {
        res += tmpString;
      }
      res = alphaStack[alphaStack.length - 1] + res;
      alphaStack.pop();
      numStack.pop();
    }
  }

  return res;
};

console.log(decodeString('3[a2[c]]'));
console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('2[abc]3[cd]ef'));

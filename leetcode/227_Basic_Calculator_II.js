/**
 * Topics: Math, String, Stack
 *
 * 곱셈, 나눗셈은 먼저 해주고 덧셈 뺄셈은 나중에 몰아서 한 번에 해주는 방법으로 하려고 했는데, 왜인지 계속 터져서 다 지우고 다시 풀었다.
 * 계산기는 스택으로 푸는게 제일 편하긴 해서 이전에도 스택을 선택하긴 했는데 두번째에는 그냥 네가지 모두 나눠서 생각했다.
 * 처음에 내가 생각했던거랑 같은데 뺄셈은 숫자에 -를 붙여서 넣는것만 달라졌다. 그렇게 하면 마지막에 뺄셈 없이 남은 값을 모두 더해주기만하면 되기 때문에 더 쉬워진다.
 * 그리고 Math.floor()로 했는데 값이 무조건 소숫점을 떼고 내림 숫자가 나와서 음수일 때 오류가 났다.
 * parseInt(num, 10)으로 10진수로 맞춰줬다.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */

const calculate = (s) => {
  const stack = [];
  let op = null;
  let num = '';

  s = s.split(' ').join('');

  for (let i = 0; i <= s.length; i++) {
    const el = s[i];

    if (!isNaN(el)) num += el;
    if (isNaN(el)) {
      num = Number(num);

      switch (op) {
        case null:
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        case '/':
          stack.push(parseInt(stack.pop() / num, 10));
          break;
      }

      num = '';
      op = el;
    }
  }

  return stack.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

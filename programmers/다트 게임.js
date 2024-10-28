/**
 * Topics: 2018 KAKAO BLIND RECRUITMENT
 *
 */

/**
 *
 * @param {string} dartResult
 * @returns {number}
 */
function solution(dartResult) {
  let tmp = 0;
  const stack = [];

  for (let i = 0; i < dartResult.length; i++) {
    const ch = dartResult.charAt(i);

    if (!isNaN(ch)) {
      if (!isNaN(dartResult.charAt(i + 1))) {
        tmp = 10;
        i++;
      } else tmp = Number(ch);
    } else {
      switch (ch) {
        case 'S':
          stack.push(tmp);
          break;
        case 'D':
          stack.push(Math.pow(tmp, 2));
          break;
        case 'T':
          stack.push(Math.pow(tmp, 3));
          break;
        case '*':
          stack[stack.length - 1] *= 2;
          stack[stack.length - 2] *= 2;
          break;
        case '#':
          stack[stack.length - 1] *= -1;
          break;
      }
    }
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
}

/**
 * Topic: 2021 카카노 채용연계형 인턴십
 *
 * map에 넣어둔 zero값 때문에 틀린게 있었다.
 * 입력값이 "one0zero0"일 때, 내 로직대로라면 'zero'라는 문자열이 tmp에 담겼을 때 'zero'의 value값 0을 res에 넣어주는 건데,
 * 조건문을 if(numberMap[tmp]) { ... }라고 해두면 존재 여부를 따지기 때문에 zero의 value값이 0이므로 조건문에 들어가지 않았다. ㄴㅇㄱ 😧
 * 그래서 if(numberMap[tmp] >= 0)으로 바꿔주었다.
 */

/**
 * @param {string} s
 * @returns {number}
 */
function solution(s) {
  const numberMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const str = s.split('');
  const res = [];
  let tmp = '';

  str.forEach((el) => {
    if (!isNaN(el)) res.push(el);
    else {
      tmp += el;

      if (numberMap[tmp] >= 0) {
        res.push(numberMap[tmp]);
        tmp = '';
      }
    }
  });

  return Number(res.join(''));
}

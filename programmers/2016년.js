/**
 * Topics: 연습문제
 *
 * Date함수를 사용하는 방법과 사용하지 않는 방법 두가지가 있다.
 * 실제 존재하는 날이기 때문에 Date 함수로도 쉽게 구할 수 있다.
 *
 * Date함수를 사용하지 않으면 각 월에 있는 날짜들로 배열을 만들고 계산해주기만 하면 된다.
 */

/**
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */

function solution(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dateStr = '2016-' + a + '- ' + b;
  let date = new Date(dateStr);

  return days[date.getDay()];
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */

function solution2(a, b) {
  const months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  let tmp = 0;

  for (let i = 1; i < a; i++) {
    tmp += months[i];
  }

  tmp += b - 1;

  return days[(5 + tmp) % 7];
}

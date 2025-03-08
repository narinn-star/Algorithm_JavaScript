/**
 * Topic: 코딩테스트 입문
 *
 * 정규식
 *
 * g를 붙이면 전역 검색
 * /a|e|i|o|u/g 대신 /[aeiou]/g를 사용하면 더욱 간결하게 사용가능
 * [] 안에 여러 문자를 넣으면 이 중 하나라도 매칭되는 것을 의미
 * | 연산자를 쓰지 않아도 됨.
 */
/**
 * @param {string} my_string
 * @returns
 */
function solution(my_string) {
  const reg = /a|e|i|o|u/g;
  return my_string.replace(reg, '');
}

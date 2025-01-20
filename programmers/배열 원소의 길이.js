/**
 * Topic: 코딩테스트 입문
 */
/**
 * @param {string[]} strlist
 * @returns {number[]}
 */
function solution(strlist) {
  const arr = [];
  strlist.forEach((str) => {
    arr.push(str.length);
  });

  return arr;
}

/**
 * Topic: 코딩테스트 입문
 */
/**
 * @param {number[]} common
 * @returns {number}
 */
function solution(common) {
  let a = common[1] - common[0];
  let b = common[2] - common[1];

  if (a === b) {
    return common[common.length - 1] + a;
  } else {
    if (a < b) return common[common.length - 1] * Math.floor(b / a);
    else return common[common.length - 1] * Math.floor(a / b);
  }
}

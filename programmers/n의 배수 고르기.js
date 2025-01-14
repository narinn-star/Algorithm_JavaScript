/**
 * Topic: 코딩테스트 입문
 */
/**
 * @param {number} n
 * @param {number[]} numlist
 * @returns {number[]}
 */
function solution(n, numlist) {
  const answer = [];

  numlist.forEach((num) => {
    if (num % n === 0) answer.push(num);
  });

  return answer;
}

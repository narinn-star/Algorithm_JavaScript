/**
 * Topic: 2018 KAKAO BLIND RECRUITMENT
 */

/**
 * @param {number} n
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {string[]}
 */
function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const binary = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');

    let str = '';

    for (let ch of binary) {
      if (ch === '1') str += '#';
      else str += ' ';
    }

    answer.push(str);
  }

  return answer;
}

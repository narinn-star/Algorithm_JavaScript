/**
 * Topic: 연습문제
 *
 * 1. 알파벳 순서대로 정렬
 * 2. 주어진 인덱스 기준으로 재정렬
 */

/**
 * @param {string[]} strings
 * @param {number} n
 * @returns {string[]}
 */
function solution(strings, n) {
  const sortedStr = strings.sort();

  return sortedStr.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}

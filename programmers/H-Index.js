/**
 * Topic: 정렬
 *
 * 문제가 몬말인지 ,,~
 */

/**
 * @param {number[]} citations
 * @returns {number}
 */
function solution(citations) {
  citations.sort((a, b) => a - b);
  const len = citations.length;

  let max = 0;

  for (let i = len - 1; 0 <= i; i--) {
    const h = citations[i];

    if (len - i <= h) {
      max = len - i;
    }
  }

  return max;
}

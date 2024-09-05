/**
 * Topics : Hash Table, String, Sliding Window
 *
 * Explanation
 *  1. 탐색하고 있는 범위 내에서 가장 많이 나온 문자 갯수를 카운팅
 *  2. 바꿔야할 알파벳 개수(범위에서 가장 많이 사용된 갯수 뺀 개수)가 k보다 크면 범위 조정
 *  3. 전체 길이에서 left 뺀 길이 리턴
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  const alphabet = new Array(26).fill(0);
  let left = 0;

  alphabet[s.charCodeAt(0) - 65]++;

  for (let i = 1; i < s.length; i++) {
    alphabet[s.charCodeAt(i) - 65]++;

    let mostFrequent = 0;
    for (let c of alphabet) {
      mostFrequent = Math.max(mostFrequent, c);
    }

    if (i - left + 1 - mostFrequent > k) {
      alphabet[s.charCodeAt(left) - 65]--;
      left++;
    }
  }

  return s.length - left;
};

console.log(characterReplacement('ABAB', 2));
console.log(characterReplacement('AABABBA', 1));

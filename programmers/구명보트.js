/**
 * Topic: 탐욕법(Greedy)
 *
 * 투포인터 사용
 */

/**
 * @param {number[]} people
 * @param {number} limit
 * @returns {number}
 */
function solution(people, limit) {
  people.sort((a, b) => a - b).reverse();
  let cnt = 0;

  let start = 0;
  let end = people.length - 1;

  while (start <= end) {
    if (people[start] + people[end] <= limit) {
      start++;
      end--;
    } else {
      start++;
    }
    cnt++;
  }

  return cnt;
}

/**
 * Topics: 해시
 *
 * for ... of : 배열
 * for ... in : 객체
 */

/**
 * @param {string[]} participant
 * @param {string[]} completion
 * @returns {string}
 */

function solution(participant, completion) {
  const map = new Map();

  for (const p of participant) {
    map[p] = (map[p] || 0) + 1;
  }

  for (const c of completion) {
    map[c]--;
  }

  for (const key in map) {
    if (map[key] === 1) return key;
  }
}

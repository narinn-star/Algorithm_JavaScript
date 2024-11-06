/**
 * Topics: 연습문제
 *
 */

/**
 * @param {string[]} cards1
 * @param {string[]} cards2
 * @param {string[]} goal
 * @returns {string}
 */

function solution(cards1, cards2, goal) {
  while (cards1.length > 0 || cards2.length > 0) {
    if (goal.length === 0) return 'Yes';

    if (cards1[0] === goal[0]) {
      cards1.shift();
      goal.shift();
    } else if (cards2[0] === goal[0]) {
      cards2.shift();
      goal.shift();
    } else {
      return 'No';
    }
  }

  return 'Yes';
}

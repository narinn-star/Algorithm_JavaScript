/**
 * Topics: 숫자 짝꿍
 *
 */

/**
 * @param {string} X
 * @param {string} Y
 * @returns {string}
 */
function solution(X, Y) {
  const mapX = {};
  const mapY = {};

  for (const num of X) {
    mapX[num] = (mapX[num] || 0) + 1;
  }

  for (const num of Y) {
    mapY[num] = (mapY[num] || 0) + 1;
  }

  let result = '';
  for (const num in mapX) {
    if (mapY[num]) {
      const minCount = Math.min(mapX[num], mapY[num]);
      result += num.repeat(minCount);
    }
  }

  if (result === '') return '-1';

  result = [...result].sort((a, b) => b - a).join('');

  if (result[0] === '0') return '0';
  else return result;
}

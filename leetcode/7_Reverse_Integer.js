/**
 * Topics: Math
 *
 *
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let minus = x > 0 ? 1 : -1;

  x = String(Math.abs(x)).split('').reverse().join('') * minus;

  if (x >= 2 ** 31 - 1 || x <= -(2 ** 31)) return 0;
  else return x;
};

/**
 * Topic: 완전탐색
 */

/**
 * @param {number[][]} sizes
 * @returns {number}
 */
function solution(sizes) {
  let minWidth = 0;
  let minHeight = 0;

  sizes.forEach((size) => {
    const [x, y] = size;
    const cur_w = Math.min(x, y);
    const cur_h = Math.max(x, y);

    minWidth = Math.max(cur_w, minWidth);
    minHeight = Math.max(cur_h, minHeight);
  });

  return minWidth * minHeight;
}

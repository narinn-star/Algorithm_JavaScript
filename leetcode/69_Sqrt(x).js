/**
 * Topics: Math, Binary Search
 */
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  let num = 0;
  let end = x;
  let ans = 0;

  while (num <= end) {
    let mid = Math.floor((num + end) / 2);

    if (mid * mid > x) {
      end = mid - 1;
    } else {
      ans = mid;
      num = mid + 1;
    }
  }

  return ans;
};

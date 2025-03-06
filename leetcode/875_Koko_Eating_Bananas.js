/**
 * Topics: Array, Binary Search
 *
 * 바이너리인줄 몰랐는뎁......
 */
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const check = (piles, h, mid) => {
    let ans = 0;
    for (let pile of piles) {
      ans += Math.floor(pile / mid);
      if (pile % mid !== 0) ans++;
    }

    return ans <= h;
  };

  let left = 1,
    right = Math.max(...piles);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (check(piles, h, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

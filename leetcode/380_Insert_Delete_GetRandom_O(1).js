/**
 * Topics: Array, Hash Table, Math, Design, Randomized
 *
 *
 */

var RandomizedSet = function () {
  this.randomSet = new Set();
};

/**
 * val이 set에 존재하지 않는다면 넣는다. 존재하지 않는다면 true, 존재한다면 false를 반환한다.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.randomSet.has(val)) {
    this.randomSet.add(val);
    return true;
  }
  return false;
};

/**
 * val이 set에 존재한다면 제거한다. 존재한다면 true, 존재하지 않는다면 false를 반환한다.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.randomSet.has(val)) {
    this.randomSet.delete(val);
    return true;
  }
  return false;
};

/**
 * set의 사이즈가 1이상일 때 랜덤으로 요소를 뽑아낸다.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomArr = Array.from(this.randomSet);

  if (randomArr.length >= 1) {
    const randomIdx = Math.floor(Math.random() * randomArr.length);
    const value = randomArr[randomIdx];
    return value;
  }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

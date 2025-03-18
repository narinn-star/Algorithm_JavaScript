/**
 * Topics: Hash Table, String, Binary Search, Design
 *
 * 쫄지 않기 ..😓
 */

var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) this.map.set(key, []);

  this.map.get(key).push({ value: value, stamp: timestamp });
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) return '';

  const list = this.map.get(key);

  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i].stamp <= timestamp) return list[i].value;
  }

  return '';
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

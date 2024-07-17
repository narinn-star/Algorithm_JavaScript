/* Topics : Hash Table, Linked List, Design, Doubly-Linked List

Explanation
이것도.. 미디움이라고 하기엔 조금 쉬웠던 문제.
값을 담을 건 Map으로 정했는데, 딱히 아무생각 없이 바로 고를 수 있었다. Key,value를 저장하기엔 Map이 적당하다 생각함.
put : key가 있으면 갱신하고, 없으면 넣어주고, 넘치면 가장 최근에 사용되지 않은 키를 삭제한다.
get : key가 있으면 반환하고, 없으면 -1을 반환한다. 이때, 최근에 사용된 키가 변경되므로 갱신해주어야 한다.
LRU의 특성 : 가장 오랫동안 사용되지 않은 항목을 제거
*/

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.cache = new Map(); // 값을 담을 곳
  this.capacity = capacity; // 사이즈
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  const v = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, v);
  return this.cache.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);
  if (this.cache.size > this.capacity) {
    this.cache.delete(this.cache.keys().next().value); // 가장 오래된 키 제거
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

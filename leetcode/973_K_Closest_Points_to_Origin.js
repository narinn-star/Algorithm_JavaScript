/**
 * Topics: Array, Math, Divide and Conquer, Geometry, Sorting, Heap (Priority Queue), QuickSelect
 *
 * 우선순위 큐는 나중에 한 번씩 더 풀어보기 ,,,, ~!
 */
// /**
//  * @param {number[][]} points
//  * @param {number} K
//  * @return {number[][]}
//  */
// var kClosest = function(points, K) {
//     return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, K);
// };

// var getLength = function([a, b]) {
//     return (a * a) + (b * b);
// }

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const maxHeap = new MaxHeap();

  for (const point of points) {
    maxHeap.insert(point);
    if (maxHeap.size() > k) {
      maxHeap.extractMax();
    }
  }

  return maxHeap.getHeap();
};

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    const getDistance = ([x, y]) => x * x + y * y;

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];

      if (getDistance(element) <= getDistance(parent)) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    const getDistance = ([x, y]) => x * x + y * y;

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;

      if (leftIdx < length) {
        const left = this.heap[leftIdx];
        if (getDistance(left) > getDistance(element)) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        const right = this.heap[rightIdx];
        if (
          (swapIdx === null && getDistance(right) > getDistance(element)) ||
          (swapIdx !== null &&
            getDistance(right) > getDistance(this.heap[swapIdx]))
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null) break;

      this.heap[idx] = this.heap[swapIdx];
      this.heap[swapIdx] = element;
      idx = swapIdx;
    }
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
  getHeap() {
    return this.heap;
  }
}

/**
 * Topics: Tree, Design, Binary Search Tree, Heap (Priority Queue), Binary Tree, Data Stream
 *
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.heap = new MinHeap();

    for (const num of nums) {
      this.add(num);
    }
  }

  add(val) {
    this.heap.insert(val);
    if (this.heap.size() > this.k) {
      this.heap.extractMin();
    }
    return this.heap.peek();
  }
}

class MinHeap {
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
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];
      if (element >= parent) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx] < element) {
          swapIdx = leftIdx;
        }
      }
      if (rightIdx < length) {
        if (
          (swapIdx === null && this.heap[rightIdx] < element) ||
          (swapIdx !== null && this.heap[rightIdx] < this.heap[leftIdx])
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
}

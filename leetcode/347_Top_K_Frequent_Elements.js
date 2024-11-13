/**
 * Topics: Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect
 *
 * 우선순위큐..? 미안 못하겠어 아직 ㅠㅠ
 *
 * 자스로 코테 준비하면서 다 너무너무 좋은데 힙 구현해야한다는 부담이 너무 큼..
 * 무튼 그냥 O(n log n)으로 풀었다.
 * 소팅하는 순간 n log n이라 힙 구현 말고는 방법이 없겠다 싶었으나 바로 모른척함ㅎ
 *
 * 게다가 그래프상 엄청 앞쪽이라 그냥 더 생각 안함.. 다른 풀이 봐도 다 소팅 씀 ㅠㅠ
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = new Map();
  nums.forEach((num) => {
    if (!map.has(num)) map.set(num, 0);

    map.set(num, map.get(num) + 1);
  });

  const mapToArray = [...map];
  mapToArray.sort((a, b) => b[1] - a[1]);

  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(mapToArray[i][0]);
  }

  return res;
};

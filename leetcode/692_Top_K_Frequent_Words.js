/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

/**
 * Topics : Hash Table, String, Trie, Sorting, Heap (Priority Queue), Bucket Sort, Counting
 *
 * Explanation
 * 1. Map에 다 집어넣는다. (key : 문자열, value : 카운팅)
 * 2. 정렬한 맵을 하나 더 만든다.
 * - localeCompare : 문자열 정렬해줌
 * `기준 문자열.localeCompare(비교할 문자열)`
 * 3. 정렬된 맵에서 키만 뽑아 배열을 만든다.
 * 4. 잘라서 리턴
 */

const topKFrequent = (words, k) => {
  let wordsMap = new Map();

  for (let word of words) {
    if (wordsMap.has(word)) {
      wordsMap.set(word, wordsMap.get(word) + 1);
    } else {
      wordsMap.set(word, 1);
    }
  }

  let cntMap = new Map(
    [...wordsMap.entries()].sort((a, b) => {
      if (b[1] !== a[1]) {
        return b[1] - a[1];
      }
      return a[0].localeCompare(b[0]);
    })
  );

  let res = Array.from(cntMap.keys()).slice(0, k);

  return res;
};

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2));
console.log(
  topKFrequent(
    ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
    4
  )
);
console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3));

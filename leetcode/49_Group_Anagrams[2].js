/**
 * Topics: Array, Hash Table, String, Sorting
 *
 * 3-4개월 전에 풀었던 풀이를 봤는데, 왜 저렇게 풀었나 싶음.. ㅎ 발전했다는 거겠죠?
 *
 * 요즘 문제 풀 때 계속 객체를 사용하는게 편해서 Map 대신 객체를 사용했는데 생각보다 느리게 나와서 빠른쪽 코드를 봤는데, Map을 사용한 걸 봤다.
 * 어차피 객체도 해시 테이블이랑 유사한 방식으로 검색해서 O(1)일텐데 왜 시간이 이렇게 다른지 찾아보니
 * 특정 상황에서는 Map이 더 효율적일 수 있다고.. ㅠㅠ?
 *
 * 두개의 차이점에 대해서도 한 번 정리해봐야겠다.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const map = {};

  strs.forEach((str) => {
    const word = str;
    const sortedWord = str.split('').sort().join('');

    if (!map[sortedWord]) map[sortedWord] = [];

    map[sortedWord].push(word);
  });

  return Object.values(map);
};

const groupAnagrams2 = (strs) => {
  const map = new Map();

  strs.forEach((str) => {
    const sortedWord = str.split('').sort().join('');

    if (!map.has(sortedWord)) map.set(sortedWord, []);

    map.get(sortedWord).push(str);
  });

  return Array.from(map.values());
};

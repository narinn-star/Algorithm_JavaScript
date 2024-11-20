/**
 * Topics: Array, Hash Table, Union Find
 *
 * Union Find는.. 어케 쓰는건가요??? 여기서 union find를 쓰지 않아도 hash table로 풀 수 있어서 개념만 보고 그냥 set으로 풀었다.
 * 풀리지 않은 의문은 지난번에 푼 거랑 차이점이 없는데 저번거는 85ms, 이번거는 1177ms나 나온다는것..
 * 왜 그런 것이에요 ?? 다시 돌리니까 85 -> 39ms까지 줄었다. 무엇.. ㅠㅠㅠㅠ
 *
 * 어쨌거나 로직은 같다. 현재 숫자가 100이라면, set에 100 - 1이 있는지 본다. 없으므로 set에 넣어준다.
 * while문에 들어갈 조건은 100 + 1이 numSet에 있는가이다. 있다면 연결되는 것이므로 +1을 해주는 것이고, 없으므로 그대로 longest = 1로 되고 끝난다.
 *
 * 현재 숫자가 4일 떄, numSet에는 4 - 3이 있기때문에 그냥 끝난다.  200은 100과 같이 진행되고, 1도 같이 진행되나, 1 + length ( = 2)가 존재하기 때문에 while문에 들어간다.
 * while문은 4까지 계속 진행되어 length가 4가 된다.
 *
 * 끗 !
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let longest = 0;

  for (const n of nums) {
    if (!numSet.has(n - 1)) {
      let length = 1;

      while (numSet.has(n + length)) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};

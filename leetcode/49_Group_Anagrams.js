/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 1. 문자열 vs map에 있는 key값들의 문자열 => 3중 for루프가 생겨버림.. => 탈락
// 2. 각 알파벳 갯수를 담은 배열이 키가 된다면 ?? => 쏘굳..
// 3. 또 다른 풀이 (해보진 않음..) : 각각의 문자열들을 sorting해서 같은 것끼리 묶어버리기

/**
 * Topics : Array, Hash Table, String, Sorting
 *
 * Explanation
 * 시도는 위와같이 했다. 내가 선택한 방법은 2번째 방법으로, 해시맵 키에 각 문자열의 각 알파벳 갯수를 담은 배열을 넣었다.
 * join(',')을 넣어준 이유는 고유하게 구분되도록 하기 위해서다.
 * [1, 10]과 [11, 0]이 같게 표기되면 구하고자하는 값이 망가지기 때문이다.
 *
 */

const countAlpha = (str) => {
  let cntArr = new Array(26).fill(0);
  for (let val of str) {
    cntArr[val.charCodeAt() - 97]++;
  }

  return cntArr.join(',');
};

const groupAnagrams = (strs) => {
  let group = new Map();

  for (let str of strs) {
    let key = countAlpha(str);

    if (group.has(key)) {
      group.get(key).push(str);
    } else {
      group.set(key, [str]);
    }
  }

  let res = [];

  for (let value of group.values()) {
    res.push(value);
  }

  return res;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['ddddddddddg', 'dgggggggggg']));

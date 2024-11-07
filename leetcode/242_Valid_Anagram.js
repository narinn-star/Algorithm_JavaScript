/**
 * Topics: Hash Table, String, Sorting
 *
 * 1. split, sort, join 함수
 * 2. map
 * 3. array, ascii code
 *
 * 알파벳으로 이루어진 문자열 문제는 아스키 코드를 활용하는게 가장 빠르게 나오긴 한다.
 * 나머지 두 방법도 틀린건 아니지만, split, sort, join 세번을 거치면서 시간이 많이 소요되기도 하고,
 * map 객체는 마지막에 every 함수로 한 번 더 순회하는 점에서 3번보다 조금 느리게 나왔다.
 *
 * 아마 every 대신 for of로 중도 탈출문 넣어주면 비슷할 것 같긴 함..
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const arrS = s.split('').sort().join('');
  const arrT = t.split('').sort().join('');

  return arrS === arrT;
};

const isAnagram2 = (s, t) => {
  if (s.length !== t.length) return false;

  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s.charAt(i)]) map[s.charAt(i)] = 0;
    map[s.charAt(i)]++;
    if (!map[t.charAt(i)]) map[t.charAt(i)] = 0;
    map[t.charAt(i)]--;
  }

  const arr = Object.values(map);

  return arr.every((val) => val === 0);
};

const isAnagram3 = (s, t) => {
  if (s.length !== t.length) return false;

  const alpha = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    alpha[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    alpha[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (const a of alpha) {
    if (a !== 0) return false;
  }
  return true;
};

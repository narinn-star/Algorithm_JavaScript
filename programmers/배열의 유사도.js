/**
 * Topic: 코딩테스트 입문
 *
 * 1. 이중 for loop
 * 2. filter
 * 3. set
 */

/**
 * @param {string[]} s1
 * @param {string[]} s2
 * @returns
 */
function solution(s1, s2) {
  let cnt = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) cnt++;
    }
  }
  return cnt;
}

function solution1(s1, s2) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}

function solution2(s1, s2) {
  const concat = [...s1, ...s2];
  const setConcat = Array.from(new Set(concat));

  return concat.length - setConcat.length;
}

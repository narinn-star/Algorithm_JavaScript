/**
 * Topic: 연습문제
 */

/**
 * @param {string} s
 * @returns {number[]}
 */
function solution(s) {
  const map = new Map();
  const res = [];

  let i = 0;

  s.split('').forEach((char) => {
    if (!map.has(char)) {
      map.set(char, [i]);
      res.push(-1);
    } else {
      map.get(char).push(i);

      const arr = map.get(char);

      if (arr.length > 1) {
        res.push(i - arr[arr.length - 2]);
      }
    }

    i++;
  });

  return res;
}

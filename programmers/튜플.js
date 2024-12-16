/**
 * Topic: 2019 카카오 개발자 겨울 인턴십
 */
/**
 *
 * @param {string} s
 * @returns {number[]}
 */
function solution(s) {
  const res = [];

  const arr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']')).sort(
    (a, b) => a.length - b.length
  );

  const numSet = new Set();

  for (let tuple of arr) {
    for (let val of tuple) {
      if (!numSet.has(val)) {
        numSet.add(val);
        res.push(val);
      }
    }
  }

  return res;
}

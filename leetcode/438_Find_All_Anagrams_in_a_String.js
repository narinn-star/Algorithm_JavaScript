/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
let findAnagrams = function (s, p) {
  let list = [];
  let sCnt = new Array(26).fill(0);
  let pCnt = new Array(26).fill(0);

  if (s.length < p.length) return list;

  for (let i = 0; i < p.length; i++) {
    sCnt[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    pCnt[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  let left = 0;
  let right = p.length;

  if (sCnt.join('') === pCnt.join('')) {
    list.push(left);
  }

  while (right < s.length) {
    sCnt[s.charCodeAt(left) - 'a'.charCodeAt(0)]--;
    sCnt[s.charCodeAt(right) - 'a'.charCodeAt(0)]++;

    if (sCnt.join('') === pCnt.join('')) {
      list.push(left + 1);
    }

    left++;
    right++;
  }

  return list;
};

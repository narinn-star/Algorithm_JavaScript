/**
 * Topics: Hash Table, Two Pointers, String, Sliding Window
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  const s1Cnt = Array(26).fill(0);
  const s2Cnt = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Cnt[s1.charCodeAt(i) - 97]++;
  }

  for (let i = 0, j = 0; i < s2.length; i++) {
    s2Cnt[s2[i].charCodeAt() - 97]++;
    if (i - j + 1 > s1.length) s2Cnt[s2[j++].charCodeAt() - 97]--;
    if (s1Cnt.toString() === s2Cnt.toString()) return true;
  }

  return false;
};

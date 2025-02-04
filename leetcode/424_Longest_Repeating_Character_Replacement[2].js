/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  let freq = {};
  let res = 0,
    i = 0,
    maxFreq = 0;

  for (let j = 0; j < s.length; j++) {
    freq[s[j]] = (freq[s[j]] || 0) + 1;
    maxFreq = Math.max(maxFreq, freq[s[j]]);

    while (j - i + 1 - maxFreq > k) {
      freq[s[i]] -= 1;
      i++;
    }

    res = Math.max(res, j - i + 1);
  }

  return res;
};

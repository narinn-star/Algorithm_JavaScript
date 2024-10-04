/**
 * @param {string} s
 * @return {number}
 */

const numDecodings = (s) => {
  if (s.charAt(0) === '0') return 0;

  const len = s.length;
  const dp = Array(len + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1; // 0인 경우는 위에서 리턴

  for (let i = 1; i < len; i++) {
    if (s.charAt(i) !== '0') {
      dp[i + 1] += dp[i];
    }

    const tmp = (s.charAt(i - 1) - '0') * 10 + (s.charAt(i) - '0');

    if (tmp <= 26 && tmp >= 10) dp[i + 1] += dp[i - 1];

    /**
    *   let single = +s[i - 1]
        let double = +(s[i - 2] + s[i - 1])
        if (single >= 1 && single <= 9) dp[i] += dp[i - 1]
        if (double >= 10 && double <= 26) dp[i] += dp[i - 2]
     */
  }

  return dp[len];
};

console.log(numDecodings('12'));
console.log(numDecodings('226'));
console.log(numDecodings('06'));
console.log(numDecodings('1023'));

/**
 *
 * 1 0 2 3
 * 1 1 2 2
 *
 * 1 1 2 3
 * 1 2 3 5
 */

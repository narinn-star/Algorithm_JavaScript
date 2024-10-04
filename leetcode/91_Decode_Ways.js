/**
 * Topics: String, Dynamic Programming
 *
 * 0으로 시작하는 문자는 복호화할 수 없기 때문에 바로 0을 리턴한다.
 *
 * 문자를 최대 1개 또는 2개로 잘랐을 때 복호화가 가능한 지 파악한 후에 적절하게 dp배열애 값을 갱신해줘야 한다.
 * 나는 0이 아닌 것은 값을 쌓아주고, 복호화가 되는 문자라면 범위를 체크해주고 두자리 전의 경우의 수를 추가했다.
 *
 * 사실 인덱스를 이것저것 만져보다 성공한거라, 더 명확하게 푸는 방법이 궁금해서 풀이를 찾아봤다.
 * 그 풀이가 주석에 작성해둔 코드인데, 한자릿수일 때와 두자릿수일 때 두가지로 나누어서 복호화가 가능하면 숫자 범위를 체크해주고
 * dp에 각각 갯수를 갱신해주는 방법이다.
 *
 * .. 천재다
 */
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

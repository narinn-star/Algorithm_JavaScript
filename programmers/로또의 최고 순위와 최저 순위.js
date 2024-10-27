/**
 * Topics: 2021 Dev-Matching: 웹 백엔드 개발자(상반기)
 *
 *
 */
/**
 * @param {number[]} lottos
 * @param {number[]} win_nums
 * @return {number[]}
 */
function solution(lottos, win_nums) {
  let zeroCnt = 0;
  let correctCnt = 0;

  const result = Array.from({ length: 2 }).fill(0);

  lottos.forEach((lotto) => {
    if (win_nums.includes(lotto)) correctCnt++;
    else if (lotto === 0) zeroCnt++;
  });

  if (zeroCnt === 6) return [1, 6];

  result[0] = 7 - (correctCnt + zeroCnt) > 6 ? 6 : 7 - (correctCnt + zeroCnt);
  result[1] = 7 - correctCnt > 6 ? 6 : 7 - correctCnt;

  return result;
}

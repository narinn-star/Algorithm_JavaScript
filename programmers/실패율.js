/**
 * Topics: 2019 KAKAO BLIND RECRUITMENT
 *
 */

/**
 * @param {number} N
 * @param {number[]} stages
 * @returns {number[]}
 */

// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
function solution(N, stages) {
  const answer = [];
  let len = stages.length;

  stages.sort((a, b) => a - b);

  for (let i = 1; i <= N; i++) {
    const num = stages.filter((val) => val === i).length;
    answer.push([i, num / len]);
    len = len - num;
  }

  return answer.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}

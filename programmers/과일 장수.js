/**
 * Topics: 연습문제
 *
 * while문 내에서 splice함수는 시간초과 이슈로 for문 + m을 이용한 인덱스 접근으로 바꿨다.
 */
/**
 *
 * @param {number} k
 * @param {number} m
 * @param {number[]} score
 * @returns {number}
 */
function solution(k, m, score) {
  let answer = 0;

  score.sort((a, b) => b - a);

  const apples = Math.floor(score.length / m);

  for (let i = 1; i <= apples; i++) {
    answer += score[m * i - 1] * m;
  }

  //     while(score.length >=m){

  //         const apples = score.splice(0, m);

  //         const cost = m * apples[m - 1];

  //         answer += cost;
  //     }

  return answer;
}

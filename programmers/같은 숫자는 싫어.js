/**
 * Topic: 스택/큐
 *
 * 요즘 계속 내 풀이를 다른 분들 풀이랑 비교해보는 습관?이 생겼는데
 * 이렇게 간단한 문제라도 정석대로 풀었다는 풀이랑 내거랑 같으면 기분이 조음.. 🫠
 */

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function solution(arr) {
  const answer = [arr[0]];
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
  }

  return answer;
}

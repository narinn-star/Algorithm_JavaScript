/**
 * Topic: 코딩테스트 입문
 *
 * 왜 replace로 빈칸을 없애서 더 어렵게 풀으려 했는지..ㅎ
 * 그냥 split으로 a, op, b, =, c 나눠서 직관적으로 비교해줬다.
 * 좋은 코드는 아니려나..
 */
/**
 * @param {string[]} quiz
 * @returns {string[]}
 */
function solution(quiz) {
  const answer = [];

  quiz.forEach((q) => {
    const arr = q.split(' ');
    let sum = 0;
    if (arr[1] === '+') {
      sum = Number(arr[0]) + Number(arr[2]);
    } else if (arr[1] === '-') {
      sum = Number(arr[0]) - Number(arr[2]);
    }

    console.log(arr);

    if (sum === Number(arr[4])) answer.push('O');
    else answer.push('X');
  });

  return answer;
}

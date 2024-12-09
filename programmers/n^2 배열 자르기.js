/**
 * Topic: 월간 코드 챌린지 시즌3
 *
 * omg 너무 어려웠어요
 * 2차원 배열로 풀면 바로 터져버린다. 그래서 1차원 배열로 처음부터 만들어두고 left ~ right만 반복해서 배열을 만들어줘야 할 듯해서
 * 수식을 이용해야겠다는 생각을 했다.
 * 좌표값을 이용해서 i / n => 행, i % n => 열 값으로 해주면 된다.
 */
/**
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */

function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const row = parseInt(i / n);
    const col = i % n;
    answer.push(Math.max(row, col) + 1);
  }

  return answer;
}

// signal: aborted (core dumped) _ 메모리 초과인듯..
// function solution(n, left, right) {
//   const arr = Array.from({ length: n }, () => new Array(n).fill(0));

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       arr[i][j] = Math.max(i + 1, j + 1);
//     }
//   }

//   const flatArr = arr.flat().slice(left, right);

//   console.log(flatArr);
// }

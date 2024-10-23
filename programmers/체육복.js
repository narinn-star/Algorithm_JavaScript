/**
 * Topics: 탐욕법(Greedy)
 *
 * lost, reserve 배열 돌면서 한 번에 계산하려고 하니까 shift나splice로 자르고 난 후에 반복문에 오류가 생겨서 student 배열을 만들어두고 시작했다.
 * 0번째 학생은 없으므로 0, 나머지는 아직 체육복을 도난당한 학생이 누군지 모르기때문에 1로 모두 초기화 했다.
 * 그리고 나서 lost, reserve 각각 반복문을 돌면서 도난당했으면 -1, 여벌이 있으면 +1을 해줬다.
 * 이렇게 하면 여벌 체육복을 가져온 학생이 도난당했을 때의 경우도 자동으로 1로 계산이 된다.
 *
 * 그리고 체육복을 1개이상 가지고 있는 학생 수를 세어주면 된다.
 */

/**
 *
 * @param {number} n
 * @param {number[]} lost
 * @param {number[]} reserve
 * @returns {number}
 */
function solution(n, lost, reserve) {
  const student = Array.from({ length: n + 1 }).fill(1);
  student[0] = 0;

  for (const lostNum of lost) {
    student[lostNum]--;
  }

  for (const reserveNum of reserve) {
    student[reserveNum]++;
  }

  for (let i = 1; i < n + 1; i++) {
    if (student[i] === 0) {
      if (student[i - 1] === 2) {
        student[i]++;
        student[i - 1]--;
      } else if (student[i + 1] === 2) {
        student[i]++;
        student[i + 1]--;
      }
    }
  }

  let res = 0;
  student.forEach((s) => {
    if (s >= 1) res++;
  });

  console.log(res);
}

/**
 *
 * @param {Number} n
 * @param {Number []} works
 * @returns {Number}
 *
 * Topics : 연습 문제
 *
 * 우선순위 큐가 젤 먼저 생각났는데, 자바스크립트로 아직 우선순위 큐를 구현할 자신이 없어서 그리디로 풀었다.
 * 난이도 3인것 치고는 따로 더 생각해야할 부분이 없어서 쉽게 풀 수 있었긴 한데
 * 이제 문제가 쉬운건지 내가 풀 수 있을 정도로 실력이 늘은 건지 구분이 안감 🫠
 */

const solution = (n, works) => {
  if (n >= works.reduce((acc, cur) => acc + cur)) return 0;

  works.sort((a, b) => b - a);

  while (n !== 0) {
    const max = works[0];

    for (let i = 0; i < works.length; i++) {
      if (works[i] >= max) {
        n--;
        works[i]--;
      }
      if (!n) break;
    }
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
};

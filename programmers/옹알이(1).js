/**
 * Topic: 코딩테스트 입문
 *
 * (2)는 트라이로 풀었던 것 같기도..한데 정규식으로 풀어봤움
 */
/**
 * @param {string[]} babbling
 * @returns {number}
 */
function solution(babbling) {
  let ans = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) ans++;
  });

  return ans;
}

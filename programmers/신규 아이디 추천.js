/**
 * Topics: 2021 KAKAO BLIND RECRUITMENT
 *
 * 정규식을 한 번 써보긴 했는데, 그냥 charCodeAt으로 알파벳, 숫자 범위 확인해도 될 듯하다. (뭐가 더 빠를지는 모르겠다.)
 * 정규식이 복잡한게 아니라서 거의 비슷할 것 같긴 하다.
 * 문제가 너무 친절한게, 1단계부터 7단계까지 너무 잘 설명이 되어있어서 어디 새어나갈 곳도 없었다.
 * 실제로도 프로그래밍을 할 때 (알고리즘이 아니더라도) 저렇게 단계별로 설계를 잘 해두고 수도코드도 작성해두면
 * 훨씬 편하고 좋을 것 같다는 생각을 했다.
 *
 * 1단계 문제는 이렇게 평범-한데 뒤로갈수록 얼마나 어려워지는건지 이제 조금 궁금해지기 시작함..
 */

/**
 *
 * @param {String} new_id
 * @returns {String}
 */

function solution(new_id) {
  let res = '';

  function checkDot() {
    if (res[0] === '.') {
      res = res.slice(1);
    }

    if (res[res.length - 1] === '.') {
      res = res.slice(0, -1);
    }
  }

  new_id = new_id.toLowerCase(); // 1단계

  const allowCharacter = ['-', '_', '.'];

  for (let char of new_id) {
    if (allowCharacter.includes(char) || char.match(/[a-z0-9]/)) {
      if (res[res.length - 1] === '.' && char === '.') {
        continue;
      }
      res += char;
    }
  }

  checkDot();

  if (res.length === 0) res = 'a';

  if (res.length >= 16) res = res.slice(0, 15);

  checkDot();

  if (res.length <= 2) {
    while (res.length !== 3) {
      res += res[res.length - 1];
    }
  }

  return res;
}

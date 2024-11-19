/**
 * Topic: 월간 코드 챌린지 시즌1
 *
 * toString, parseInt를 가지고 진법 변환을 자유자재로 할 수 있어서 문제 풀기는 쉬웠다.
 * sperate operation 사용법은 다른분의 풀이를 보고 감탄해서 가져옴.. 생각도 못했지 뭐야.. 그게 그거긴 하겠지만
 *
 * 그리고 알고리즘 풀 때 함수에 의존해서 풀때면 항상 걱정하는게, 내가 과연 그 함수 내부를 알고 푸는것인지 아닌지여서
 * toString, parseInt 없이 그냥 진법 변환을 직접 해봤다.
 * 뒤집지 않아도 unshift로 넣으면 이미 인덱스와 제곱수가 맞아떨어져서 push대신 unshift를 사용했다.
 * 그리고 reduce에 index 파라미터가 있는줄 몰랐슴,, 맨날 acc, cur, initialValue 세가지만 써서 몰랐다.
 * index 사용해서 바로 제곱해주면서 10진수로 변환해줬다.
 */

/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  let number = n.toString(3).split('').reverse().join('');
  // let number = [...n.toString(3)].reerse().join('');
  number = parseInt(number, 3);

  return number;
}

function solution2(n) {
  const arr = [];

  while (n >= 3) {
    arr.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  arr.unshift(n);

  return arr.reduce((acc, cur, idx) => {
    return acc + cur * Math.pow(3, idx);
  }, 0);
}

/**
 * Topic: 코딩테스트 입문
 */
/**
 * @param {number} numer1
 * @param {number} denom1
 * @param {number} numer2
 * @param {number} denom2
 * @returns
 */
function solution(numer1, denom1, numer2, denom2) {
  let denom = denom1 * denom2;
  let num = numer1 * denom2 + numer2 * denom1;

  let min = Math.min(denom, num);

  for (let i = min; i >= 1; i--) {
    if (denom % i === 0 && num % i === 0) {
      denom = Math.floor(denom / i);
      num = Math.floor(num / i);
    }
  }

  return [num, denom];
}

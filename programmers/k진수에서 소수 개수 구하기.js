/**
 * Topic: 2022 KAKAO BLIND RECRUITMENT
 */
/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

function solution(n, k) {
  const isPrime = (num) => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let str = n.toString(k);
  let cnt = 0;
  let strArr = str.split('0');

  for (let i = 0; i < strArr.length; i++) {
    if (isPrime(Number(strArr[i]))) {
      cnt++;
    }
  }

  return cnt;
}

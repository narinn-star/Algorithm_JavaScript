/**
 * @param {number[]} digits
 * @return {number[]}
 */

/* Topics : Array, Math

Explanation
배열에 있는 수들을 쭉 나열해 숫자로 만들었을 때 +1 해준 값을 다시 한자리씩 배열에 넣어 반환해야한다.
js에는 배열을 문자열로 바꾸는 join(), 문자열을 배열로 바꾸는 split()이 있어 이를 사용했다.
다만, 처음엔 Number로 문자열을 숫자로 바꾸었는데 값이 넘쳐 BigInt로 바꾸어주었다.
BigInt는 처음 봤는데, ES11에서 표준으로 채택된, 매우 큰 정수를 다룰 수 있도록 설계된 자료형이다.
기존의 Number는 2^53 - 1 (9,007,199,254,740,991)까지 나타낼 수 있었다면, 
BigInt는 숫자 끝에 n을 붙여 BigInt임을 명시해주거나 생성자를 사용해 변환할 수도 있다.
*/

const plusOne = function (digits) {
  //   let input = Number(digits.join('')) + 1;
  let input = BigInt(digits.join('')) + 1n;
  console.log(input);

  let result = input.toString().split('');
  return result;
};

/**
 * Topic: 월간 코드 챌린지 시즌2
 *
 * 2개 이하로 다르다는 조건 빼먹고 무작정 했다가 반복문 다시 고쳐줬다..!
 *
 * 다른 분들 코드를 찾아보니 홀/짝을 나눠서 했던데 전혀 생각 못했고요~
 * 두개 이하로 바꿔야해서 0이 처음으로 나오는 곳을 찾아서 01 => 10으로 바꿔줬다.
 * 만약 다 1이면 앞에 unshift로 1 넣어줌
 * -> 배열로 풀어서 가능했던건데, 문자열로 했으면 그냥 substring() 사용했으면 됐을 것 같다!
 */

/**
 * @param {number[]} numbers
 * @returns {number[]}
 */
function solution(numbers) {
  let res = [];

  numbers.forEach((number) => {
    let bit = [...number.toString(2)];
    let length = bit.length;

    if (bit[length - 1] === '0') {
      bit[length - 1] = '1';
      res.push(bit.join(''));
    } else {
      for (let i = length - 1; i >= 0; i--) {
        if (bit[i] === '0') {
          bit[i] = '1';
          bit[i + 1] = '0';
          res.push(bit.join(''));
          break;
        } else if (bit[i] === '1' && i === 0) {
          bit[i] = '0';
          bit.unshift('1');
          res.push(bit.join(''));
        }
      }
    }
  });

  return res.map((el) => parseInt(el, 2));
}

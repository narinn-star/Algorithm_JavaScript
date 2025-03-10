/**
 * Topic: 코딩테스트 입문
 *
 * forEach(), filter()
 */
/**
 * @param {number[]} array
 * @param {number} n
 * @returns
 */
function solution(array, n) {
  //     let cnt = 0;
  //     array.forEach((el) => {
  //         if(el === n) cnt++;
  //     })

  //     return cnt;

  // const arr = array.filter((el) => el === n)
  // return arr.length;

  return array.filter((el) => el === n).length;
}

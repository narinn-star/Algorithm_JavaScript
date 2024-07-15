/**
 * @param {number} n
 * @return {boolean}
 */

/* Topics : Hash Table, Math, Two Pointers

Explanation
Happy Number의 기준 : 각 자릿수의 제곱을 합하는 것을 반복하면서 1이 나오면 true, 그렇지 않으면 false를 반환한다.
주어진 예제 19는 설명처럼 4번째에 1이 나오기 때문에 true를,
2는 계속해서 돌려보면 어느 순간 앞전에 나왔던 값이 다시 나오기 시작하는 것을 알 수 있었다.
그래서 무한반복되기 때문에, 나왔던 값들을 모두 저장해두는 것을 선택했다.
저장해두고 같은 값이 나오면 바로 false를 반환했다.
*/

const isHappy = function (n) {
  if (n === 1) return true;

  const list = {};

  while (n !== 1) {
    let tmp = String(n).split('').map(Number);
    let sum = 0;

    tmp.forEach((num) => {
      sum += Math.pow(num, 2);
    });

    if (sum === 1) return true;
    else {
      if (list[sum]) return false;
      n = sum;
      list[n] = true;
    }
  }
  return false;
};

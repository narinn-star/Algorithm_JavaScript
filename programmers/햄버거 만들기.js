/**
 * Topics: 연습문제
 *
 * 처음엔 슬라이딩 윈도우로 while문 내부에서 처리하도록 했다.
 * ingredient 길이가 너무 길기도 하고 stringify로 펼치는 데도 너무 오래걸려서 그런지 시간초과가 떴다.
 * 그래서 스택으로 갈아타기 ~
 *
 * 스택에 하나씩 넣어주고 4개가 1231일 때 잘라내고 햄버거 갯수 올려줬다.
 * 허무해버리기,,
 */
/**
 * @param {number[]} ingredient
 * @returns {number}
 */
function solution(ingredient) {
  let cnt = 0;
  const stack = [];

  for (let i of ingredient) {
    stack.push(i);

    if (stack.slice(-4).join('') == '1231') {
      stack.splice(-4);
      cnt++;
    }
  }
  return cnt;
}

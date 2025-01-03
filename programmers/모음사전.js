/**
 * Topic: 완전탐색
 *
 * 완전탐색 문제였네..?
 * 단어 길이가 최대 5이기도 하고, 알파벳도 5개로만 이루어져 있어서 바로 규칙 찾는게 낫다고 생각했다.
 * 규칙은 대충 하나씩 적어보면 E까지만 적어봐도 A와 얼마나 차이나는지 알 수 있기 때문에 후다닥 구할 수 있다.
 * 다 구하면 자릿수끼리 묶어두고 더하기만 하면 된다.
 */
/**
 * @param {string} word
 * @returns {number}
 */
function solution(word) {
  const first = {
    A: 1,
    E: 782,
    I: 1563,
    O: 2344,
    U: 3125,
  };
  const second = {
    A: 1,
    E: 157,
    I: 313,
    O: 469,
    U: 625,
  };
  const third = {
    A: 1,
    E: 32,
    I: 63,
    O: 94,
    U: 125,
  };
  const fourth = {
    A: 1,
    E: 7,
    I: 13,
    O: 19,
    U: 25,
  };
  const fifth = {
    A: 1,
    E: 2,
    I: 3,
    O: 4,
    U: 5,
  };

  const order = [first, second, third, fourth, fifth];

  return [...word].reduce((acc, letter, idx) => {
    acc += order[idx][letter];
    return acc;
  }, 0);
}

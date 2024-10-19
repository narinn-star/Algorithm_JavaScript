/**
 * Topics: 2020 카카오 인턴십
 *
 * 이렇게 푸는게 최선이었을까..? 거리를 구하려면 이 방법밖에 없긴 한데 keyPad 객체를 직접 만드니까 뭔가 지저분해보여서 의심스러웠슴..
 *
 * 그래서 다른 분들의 풀이를 몇개 봤는데 이렇게 푸는게 맞고 (맨해튼 거리 사용)
 * 조금 더 깔끔하게 작성하려면 키패드 객체를 getDict()함수 내로 옮겨서 그 내부에서만 사용하도록 한 것?
 * 근데 뭐.. 그게 그거이긴 하나, 메모리에 조금 더 좋긴 하겠다 생각했다.
 *
 */

/**
 *
 * @param {number[]} numbers
 * @param {string} hand
 * @returns {string}
 */

function solution(numbers, hand) {
  const keyPad = {
    1: { loc: [0, 0] },
    2: { loc: [0, 1] },
    3: { loc: [0, 2] },
    4: { loc: [1, 0] },
    5: { loc: [1, 1] },
    6: { loc: [1, 2] },
    7: { loc: [2, 0] },
    8: { loc: [2, 1] },
    9: { loc: [2, 2] },
    '*': { loc: [3, 0] },
    0: { loc: [3, 1] },
    '#': { loc: [3, 2] },
  };

  let leftHand = '*';
  let rightHand = '#';
  let res = '';

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      res += 'L';
      leftHand = number;
    } else if (number === 3 || number === 6 || number === 9) {
      res += 'R';
      rightHand = number;
    } else {
      const ld =
        Math.abs(keyPad[leftHand].loc[0] - keyPad[number].loc[0]) +
        Math.abs(keyPad[leftHand].loc[1] - keyPad[number].loc[1]);
      const rd =
        Math.abs(keyPad[rightHand].loc[0] - keyPad[number].loc[0]) +
        Math.abs(keyPad[rightHand].loc[1] - keyPad[number].loc[1]);

      if (ld === rd) {
        if (hand === 'left') {
          res += 'L';
          leftHand = number;
        } else {
          res += 'R';
          rightHand = number;
        }
      } else if (ld < rd) {
        res += 'L';
        leftHand = number;
      } else {
        res += 'R';
        rightHand = number;
      }
    }
  });

  return res;
}

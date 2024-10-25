/**
 * Topics: 연습문제
 *
 * 문자가 존재하지 않는 경우에 생각해야할 조건들을 넣지 않아서 몇번 실패했는데,
 * flag로 문자가 존재하는지에 대한 여부를 미리 체크해두어서 res 배열에 정상적인 값을 추가했다.
 *
 * 불필요할까 싶어 flag 없이 하려다 더 복잡해져서 실패가 떴는데,, 일단 해보고 빼쟈,,
 */

/**
 * @param {string[]} keymap
 * @param {string[]} targets
 * @returns {number[]}
 */
function solution(keymap, targets) {
  const map = new Map();

  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      const ch = keymap[i].charAt(j);
      if (!map.has(ch)) {
        map.set(ch, j + 1);
      } else {
        if (map.get(ch) > j + 1) {
          map.set(ch, j + 1);
        }
      }
    }
  }

  const res = [];
  for (let i = 0; i < targets.length; i++) {
    let sum = 0;
    let flag = true;
    for (let j = 0; j < targets[i].length; j++) {
      const ch = targets[i].charAt(j);
      if (!map.has(ch)) {
        flag = false;
        break;
      } else {
        sum += map.get(ch);
      }
    }
    res.push(flag ? sum : -1);
  }

  return res;
}

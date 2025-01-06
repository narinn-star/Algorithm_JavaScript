/**
 * Topic: 2018 KAKAO BLIND RECRUITMENT
 *
 */
/**
 * @param {string} msg
 * @returns {number[]}
 */
function solution(msg) {
  const msgArr = [...msg];
  const res = [];

  const map = new Map();

  for (let i = 1; i <= 26; i++) {
    let alpha = String.fromCharCode(64 + i);
    map.set(alpha, i);
  }

  let dicNum = 27;

  for (let i = 0; i < msg.length; i++) {
    let w = msg[i];
    let c = msg[i + 1];

    while (map.has(w + c) && i < msg.length - 1) {
      i++;

      w = w + c;
      c = msg[i + 1];
    }

    res.push(map.get(w));
    map.set(w + c, dicNum++);
  }
  return res;
}

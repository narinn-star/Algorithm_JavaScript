/**
 * Topics: Premium이라 안보영..
 *
 * Input: ["neet","code","love","you"]
 * Output:["neet","code","love","you"]
 *
 * Input: ["we","say",":","yes"]
 * Output: ["we","say",":","yes"]
 *
 * 입출력 값이 이렇게 나와있어서 도대체 뭘 하라는건지.. 모르겠어서 문제 풀이를 참고했다.
 * 풀이 코드를 참고했다기 보단 문제 설명을 찾아봤다. 말 그대로 인코딩/디코딩인데 특정 방법으로(?)인코딩하고 다시 그 방법을 토대로 디코딩해서 원래 값을 돌려받을 수 있게 하는 거다.
 * 절대 들어가있을리가 없는 😳 이런 이모지를 사이에 넣었다가 빼도 되긴한데, 그건 너무 얍삽한 것 같아서 #을 넣기로 했다.
 * 중요한 건 주어진 strs 배열의 요소 문자열 중 #이 포함되어 있으면 디코딩 시에 문제가 생긴다는 점이다.
 * 그래서 배열 요소 문자열의 길이를 같이 넣어서 인코딩했다.
 * ["hello", "Wo#rld"]라고 되어있으면
 * "5#hello6#Wo#rld" 이렇게..! 그러면 문자열에 #이 포함되어 있더라도 length만큼 잘라버리면 되기 때문에 상관이 없어진다.
 *
 * 이게 먼 문젠가 싶지만..? Blind 75에도 포함되어 있을만큼 중요도가 높은 문제래.. 그렇대 ~
 */

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = '';
    for (let str of strs) {
      res += `${str.length}#${str}`;
    }

    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
      const pos = str.indexOf('#', i);
      const len = parseInt(str.slice(i, pos));

      i = pos + 1;
      const s = str.slice(i, i + len);
      res.push(s);
      i += len;
    }

    return res;
  }
}

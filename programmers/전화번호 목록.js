/**
 * Topic: 해시
 *
 * 토픽은 해시인데 내가 푼 건 트라이 다른 분이 푼 거는 그냥 startsWith() ...
 *
 * 트라이구조는 아직도 손에 잘 안익기는 한데, 어떻게 동작하는지도 알았지만 정확히는 그걸 구현해내는 js능력이 부족한것이 아닌가 ..
 * 전화번호 끝 여부를 따지는건 검색해보면서 알았는데 지금보니 너무 당연한 존재였다는점.. ㅎ
 *
 * 다른 분의 풀이를 보니 세줄로 뚝딱 작성하셔서 살짝 현타가 왔지만 아래에 공유도 해뒀다.
 * startsWith 함수를 처음 알게됨🫢
 *
 * some() 메서드는 배열의 요소 중 하나라도 주어진 조건을 만족하는 경우 true를 반환하고, 그렇지 않으면 false를 반환한다.
 * startsWith() 메서드는 문자열이 특정 문자열로 시작하는지를 확인한다.
 */
/**
 * @param {string[]} phone_book
 * @returns {boolean}
 */

class TrieNode {
  constructor() {
    this.children = {}; // 자식 노드
    this.isEndOfNumber = false; // 전화번호의 끝인지 여부
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertNumber(num) {
    let curNode = this.root;

    for (let char of num) {
      if (!curNode.children[char]) {
        //없으면 새로운 노드 추가
        curNode.children[char] = new TrieNode();
      }
      curNode = curNode.children[char];

      if (curNode.isEndOfNumber) {
        return false;
      }
    }

    curNode.isEndOfNumber = true;

    if (Object.keys(curNode.children).length > 0) return false;

    return true;
  }
}
function solution(phone_book) {
  const trie = new Trie();

  phone_book.sort((a, b) => a.length - b.length);

  for (const number of phone_book) {
    if (!trie.insertNumber(number)) return false;
  }

  return true;
}

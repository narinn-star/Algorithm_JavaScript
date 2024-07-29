/**
 * Topics : String, Depth-First Search, Design, Trie
 *
 * Explanation
 * 전체 단어들을 담기 위해서 Set 데이터 구조를 선택했다.
 * 넣을 때도 그냥 집어 넣기만 하면 되고, search를 할 때 '.'을 고려해줘야하기 때문에 하나씩 찾아보는 로직을 선택했다.
 * 먼저 길이가 다르면 그냥 넘기고 다음 단어를 비교한다.
 * .이 있을 때는 다른 어떤 문자여도 상관 없음을 조건으로 flag를 false로 바꾸고, 바꿔지면 바로 break한다.
 * 모두 돌아본 후에도 flag가 true라면 true를, for루프가 끝날때까지 return되지 않으면 false를 리턴한다.
 *
 */

const WordDictionary = () => {
  this.dictionary = new Set();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.dictionary.add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  for (const w of this.dictionary) {
    if (w.length !== word.length) continue; // 애초에 틀림

    let flag = true;
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== '.' && w[i] !== word[i]) {
        flag = false;
        break;
      }
    }

    if (flag) return true;
  }
  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

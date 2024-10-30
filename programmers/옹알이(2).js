/**
 *
 * @param {string[]} babbling
 * @returns {number}
 */

function solution(babbling) {
  var answer = 0;

  const word = ['aya', 'ye', 'woo', 'ma'];

  for (let i = 0; i < babbling.length; i++) {
    let b = babbling[i];

    for (let j = 0; j < word.length; j++) {
      if (b.includes(word[j].repeat(2))) {
        break;
      }

      b = b.split(word[j]).join(' ');
    }
    if (b.split(' ').join('').length === -0) answer++;
  }

  return answer;
}

/**
 * Topic: 연습문제
 */

/**
 * @param {string} s
 * @returns {string}
 */

function solution(s) {
  const words = s.split(' ');

  const resStr = words.map((word) => {
    let str = '';
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) str += word[i].toUpperCase();
      else str += word[i].toLowerCase();
    }

    return str;
  });

  return resStr.join(' ');
}

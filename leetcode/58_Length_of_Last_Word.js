/**
 * Topic: String
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const arr = s.split(' ');
  let last = '';
  arr.forEach((el) => {
    if (el !== '') last = el;
  });

  return last.length;
};

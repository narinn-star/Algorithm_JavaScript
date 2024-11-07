/**
 * Topic: 연습문제
 *
 */

/**
 * @param {string[]} name
 * @param {number[]} yearning
 * @param {string[][]} photo
 * @returns {number[]}
 */
function solution(name, yearning, photo) {
  const map = {};

  for (let i = 0; i < name.length; i++) {
    map[name[i]] = yearning[i];
  }

  let result = [];
  photo.forEach((arr) => {
    let sum = 0;
    arr.forEach((el) => {
      if (map[el]) sum += map[el];
    });
    result.push(sum);
  });

  return result;
}

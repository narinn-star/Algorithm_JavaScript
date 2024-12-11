/**
 * Topic: 해시
 *
 * hasOwnProperty:
 */

/**
 * @param {String[][]} clothes
 * @returns {Number[]}
 */

function solution(clothes) {
  const map = {};
  let ans = 1;

  clothes.forEach((arr) => {
    const [type, name] = arr;
    if (map.hasOwnProperty(name)) {
      map[name]++;
    } else {
      map[name] = 1;
    }
  });

  for (const key in map) {
    ans *= map[key] + 1;
  }

  return ans - 1;
}

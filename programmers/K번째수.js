/**
 * Topic: 정렬
 */
/**
 * @param {number[]} array
 * @param {number[][]} commands
 * @returns {number[]}
 */
function solution(array, commands) {
  const res = [];

  commands.forEach((command) => {
    const [i, j, k] = command;

    let arr = array.slice(i - 1, j);
    arr.sort((a, b) => a - b);

    res.push(arr[k - 1]);
  });

  return res;
}

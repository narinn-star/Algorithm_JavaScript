/**
 * Topic: 코딩테스트 입문
 */
/**
 * @param {number[]} array
 * @returns {number}
 */
function solution(array) {
  if (array.length === 1) return array[0];
  const numMap = new Map();

  array.forEach((el) => {
    if (!numMap.has(el)) numMap.set(el, 0);
    numMap.set(el, numMap.get(el) + 1);
  });

  const sortedArray = Array.from(numMap.entries()).sort(
    ([, valueA], [, valueB]) => {
      return valueB - valueA;
    }
  );

  if (sortedArray.length === 1) return sortedArray[0][0];

  if (sortedArray[0][1] === sortedArray[1][1]) return -1;

  return sortedArray[0][0];
}

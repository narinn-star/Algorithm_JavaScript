/**
 * Topic: 연습문제
 *
 * repeat() 함수는 '문자열' 반복 함수
 */
/**
 * @param {number[]} food
 * @returns {string}
 */

function solution(food) {
  const foodArr = [0];

  for (let i = 1; i < food.length; i++) {
    foodArr[i] = Math.floor(food[i] / 2);
  }

  let str = '';

  for (let i = 0; i < foodArr.length; i++) {
    str += i.toString().repeat(foodArr[i]);
  }

  str += '0';

  for (let i = foodArr.length - 1; i >= 0; i--) {
    str += i.toString().repeat(foodArr[i]);
  }

  return str;
}

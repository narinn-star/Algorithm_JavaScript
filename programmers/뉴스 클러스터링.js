/**
 * Topic: 2018 KAKAO BLIND RECRUITMENT
 *
 * 다음에 다시 풀어보기,,
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
function solution(str1, str2) {
  let answer = 0;
  let regEx = /^[a-zA-Z]+$/;
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    let subStr = str1.toLowerCase().substring(i, i + 2);
    if (regEx.test(subStr)) {
      arr1.push(subStr);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    let subStr = str2.toLowerCase().substring(i, i + 2);
    if (regEx.test(subStr)) {
      arr2.push(subStr);
    }
  }

  const union = [];
  const intersect = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersect.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    union.push(arr2[i]);
  }

  for (let i = 0; i < arr1.length; i++) {
    union.push(arr1[i]);
  }

  if (union.length === 0) answer = 65536;
  else {
    answer = Math.floor((intersect.length / union.length) * 65536);
  }

  return answer;
}

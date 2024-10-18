/**
 * Topics: 2022 KAKAO TECH INTERNSHIP
 *
 * switch-case 조건문 대신 Math.abs()로 풀었다면 더 가독성이 좋았겠다는 생각..
 */

/**
 * @param {string[]} survey
 * @param {number[]} choices
 * @returns {string}
 */

function solution(survey, choices) {
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    const [first, second] = survey[i].split('');
    const point = choices[i];

    switch (point) {
      case 1:
        types[first] += 3;
        break;
      case 2:
        types[first] += 2;
        break;
      case 3:
        types[first] += 1;
        break;
      case 4:
        break;
      case 5:
        types[second] += 1;
        break;
      case 6:
        types[second] += 2;
        break;
      case 7:
        types[second] += 3;
        break;
    }
  }

  let res = '';

  res += types.R >= types.T ? 'R' : 'T';
  res += types.C >= types.F ? 'C' : 'F';
  res += types.J >= types.M ? 'J' : 'M';
  res += types.A >= types.N ? 'A' : 'N';

  return res;
}

// Topics : 카펫

function solution(brown, yellow) {
  let answer = [];

  let sum = brown + yellow;

  for (let i = 3; i <= sum; i++) {
    if (sum % i === 0) {
      let j = sum / i;
      if (i < j) continue;

      if ((i - 2) * (j - 2) == yellow) {
        answer.push(i);
        answer.push(j);
      }
    }
  }

  return answer;
}

// Explanation
// 소인수분해 한 값들 중, 테두리를 뺐을 때 i x j 가 yellow값과 일치하는지 확인해주고,
// 배열애 넣었다.

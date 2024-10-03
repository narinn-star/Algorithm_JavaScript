const solution = (A, B) => {
  var answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let idx = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[idx] < B[i]) {
      answer++;
      idx++;
    }
  }
  return answer;
};

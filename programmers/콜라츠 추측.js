function solution(num) {
  var answer = 0;
  if (num === 1) return 0;

  while (true) {
    if (num === 1) break;

    if (num % 2 === 0) {
      num /= 2;
      answer++;
    } else {
      num *= 3;
      num++;
      answer++;
    }

    if (answer === 500 && num !== 1) return -1;
  }
  return answer;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));

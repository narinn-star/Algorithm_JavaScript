// Topics : 연습 문제

function solution(n) {
  let prime = new Array(n + 1).fill(true).fill(false, 0, 2);

  for (let i = 2; i * i <= n + 1; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n + 1; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter((e) => e).length;
}

console.log(solution(10));
console.log(solution(5));

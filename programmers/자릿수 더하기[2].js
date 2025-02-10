function solution(n) {
  const nums = String(n);

  let sum = nums.split('').reduce((acc, cur) => acc + Number(cur), 0);
  return sum;
}

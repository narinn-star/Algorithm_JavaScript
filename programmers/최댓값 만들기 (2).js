function solution(numbers) {
  const len = numbers.length;

  numbers.sort((a, b) => a - b);
  const a = numbers[0] * numbers[1];
  const b = numbers[len - 1] * numbers[len - 2];

  return a > b ? a : b;
}

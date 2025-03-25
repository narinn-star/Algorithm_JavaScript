function solution(a, b) {
  const str = a.toString() + b.toString();
  const num = 2 * a * b;
  return Math.max(+str, num);
}

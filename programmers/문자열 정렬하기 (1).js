function solution(my_string) {
  const num = [];

  for (const ch of my_string) {
    if (!isNaN(ch)) num.push(+ch);
  }

  num.sort((a, b) => a - b);
  return num;
}

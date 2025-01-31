function solution(my_string, n) {
  let res = '';

  my_string.split('').forEach((ch) => {
    res += ch.repeat(n);
  });

  return res;
}

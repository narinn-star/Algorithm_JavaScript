function solution(my_string, letter) {
  let res = '';

  my_string.split('').forEach((char) => {
    if (char !== letter) res += char;
  });

  return res;
}

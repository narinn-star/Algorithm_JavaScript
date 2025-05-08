function solution(my_string) {
  let ans = '';

  const isLowerCase = (ch) => {
    return ch === ch.toLowerCase();
  };

  my_string.split('').map((ch, idx) => {
    if (isLowerCase(ch)) ans += ch.toUpperCase();
    else ans += ch.toLowerCase();
  });

  return ans;
}

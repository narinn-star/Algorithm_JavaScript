function solution(my_string) {
  let ans = 0;

  my_string.split('').map((el) => {
    if (!isNaN(el)) ans += +el;
  });

  return ans;
}

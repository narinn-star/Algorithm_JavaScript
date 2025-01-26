function solution(array, height) {
  let cnt = 0;
  array.forEach((el) => {
    if (el > height) cnt++;
  });

  return cnt;
}

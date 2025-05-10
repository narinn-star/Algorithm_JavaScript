function solution(my_string) {
  const arr = my_string.split(/\s+/).filter((a) => a !== '');

  return arr;
}

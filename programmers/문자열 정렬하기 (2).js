function solution(my_string) {
  let arr = [];

  my_string.split('').map((el) => arr.push(el.toLowerCase()));

  return arr.sort().join('');
}

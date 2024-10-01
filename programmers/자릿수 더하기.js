const solution = (N) => {
  var answer = 0;
  const str = N.toString();

  const list = [...str];

  list.forEach((num) => {
    answer += Number(num);
  });

  return answer;
};

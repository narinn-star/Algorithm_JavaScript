function solution(box, n) {
  let cnt = 1;

  for (let i = 0; i < box.length; i++) {
    cnt *= Math.floor(box[i] / n);
  }

  return cnt;
}

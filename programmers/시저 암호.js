function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') answer += ' ';
    else {
      let tmp = s[i];
      if (s[i] === tmp.toUpperCase()) {
        //대문자
        if (s[i].charCodeAt() + n > 'Z'.charCodeAt()) {
          answer += String.fromCharCode(s[i].charCodeAt() + n - 26);
        } else {
          answer += String.fromCharCode(s[i].charCodeAt() + n);
        }
      } else {
        //소문자
        if (s[i].charCodeAt() + n > 'z'.charCodeAt()) {
          answer += String.fromCharCode(s[i].charCodeAt() + n - 26);
        } else {
          answer += String.fromCharCode(s[i].charCodeAt() + n);
        }
      }
    }
  }

  return answer;
}

console.log(solution('AB', 1));
console.log(solution('XYZ', 3));
// console.log(solution('AB', 3));
// console.log(solution('z', 3));
// console.log(solution('Z', 2));
console.log(solution('xyz', 3));
// console.log(solution('a B z', 4));
// console.log(solution('AaZz', 25));

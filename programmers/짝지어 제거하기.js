/*Topics : 2017 팁스타운

    Explanation
    문자열 하나씩 돌면서 splice해주는 방법으로 했는데, while문이 들어가자마자 시간초과가 나는 것 같았다.
    효율성 체크에서 다 시간초과가 나서, O(n)으로 풀 수 있는 방법을 생각했다.

    스택에 하나씩 넣으면서 하면 무조건 n번이므로, 시간이 단축됨🫢

*/

const solution = (s) => {
  const stack = [];

  stack.push(s.charAt(0));

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] === s.charAt(i)) {
      stack.pop();
    } else {
      stack.push(s.charAt(i));
    }
  }
  if (stack.length === 0) return 1;
  else return 0;
};

console.log(solution('baabaa'));
console.log(solution('cdcd'));

// const solution = (s) => {
//   const array = Array.from(s);

//   const removeChar = (string) => {
//     for (let i = 0; i < string.length - 1; i++) {
//       if (string[i] === string[i + 1]) {
//         string.splice(i, 2);
//         return true;
//       }
//     }
//     return false;
//   };

//   while (true) {
//     const flag = removeChar(array);
//     if (flag) {
//       if (array.length === 0) return 1;
//     } else return 0;
//   }
// };

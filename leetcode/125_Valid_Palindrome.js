/**
 * Topics: Two Pointers, String
 *
 * 투포인터 문제라면서 투포인터로 풀면 184ms 나오고 그냥 js내장함수 쓰면 5ms가 나오는 ..
 *
 * 그래서 내가 투포인터를 잘못 풀었나 싶어 찾아봤는데 while문 돌려서 그런 것 같다. for문 한 번으로 끝낼 수 있었슴
 * 릿코드 문제에서만 그런건지 유독 정규식이 많이 나와서 이제 조금씩 익혀야겠다는 생각이 들었따..
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  return str === str.split('').reverse().join('');
};

/**
 * @param {string} s
 * @returns {boolean}
 */
const isPalindrome2 = (s) => {
  const str = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split('');

  while (str.length > 0) {
    const left = str[0];
    const right = str[str.length - 1];

    if (left !== right) return false;

    str.shift();
    str.pop();
  }

  return true;
};

/**
 * @param {string} s
 * @returns {boolean}
 */
const isPalindrome3 = (s) => {
  const str = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split('');

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }

  return true;
};

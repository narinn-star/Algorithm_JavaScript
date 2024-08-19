// Topics : 연습문제

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(Number(s[i]))) return false;
    }
  } else return false;
  return true;
}

// Explanation
// js에서 지수부분 e도 문자열로 인식해서, 한글자 한글자씩 떼어 확인해야했다.. 🫠

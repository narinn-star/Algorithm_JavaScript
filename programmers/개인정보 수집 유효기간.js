/**
 * Topics: 2023 KAKAO BLIND RECRUITMENT
 *
 * 단순히 날짜를 계산하고 비교하는 건데 생각보다 복잡해서 당황했다..
 * 아니 복잡하다기 보단 내가 순차적으로 생각을 못했던 게 맞음
 *
 * js는 문자열 자르고 담기는 정말 편하긴 해서 이부분은 따로 적어둘 게 없다.
 * 날짜 비교 함수가 중요한데, 처음엔 간단하게 m + t했을 때 12가 넘으면 y++, m은 m % 12로 담아두고, d--했을 때 d가 0이면 28, m--까지
 * 이렇게만 했는데 그냥 다 틀렸다. 🤣
 * 그래서 다 지워버리고 계산을 끝내둔 후에 하나씩 다시 생각해보았다. 조건식도 더 세분화했다.
 * 만약 m이 12가 넘어버렸을 때 12의 배수인 것도 처리해줘야한다. 12의 배수일 때는 연도를 배수만큼 빼줘야 맞다. (이부분을 완전히 생각 못함..)
 * 그리고 배수가 아닐 때는 원래 계산하던 대로 m % 12로 넣어주면 된다.
 *
 * 그다음으 d가 0일때 이다. 각 월은 28일까지 있다고 했으니 m도 하나 빼주고, d는 28로 고치면 된다.
 * 이때 m이 0이 되면 12로 바꿔주고, y는 하나 빼주면 된다.
 *
 * 마지막 비교문도 조건문을 다 쪼개어 놓았는데, 이게 맞는 것 같다..
 *
 * 기본에 충실하자..~
 */

/**
 * @param {String} today
 * @param {String[]} terms
 * @param {String[]} privacies
 * @returns {Number[]}
 */

function solution(today, terms, privacies) {
  const [year, month, day] = today.split('.').map(Number);
  const termsMap = new Map();
  const res = [];

  terms.forEach((el) => {
    const [type, term] = el.split(' ');

    termsMap.set(type, Number(term));
  });

  function compareDay(y, m, d, t) {
    m += t;
    d--;

    if (m > 12) {
      if (m % 12 === 0) {
        y += parseInt(m / 12) - 1;
        m = 12;
      } else {
        y += parseInt(m / 12);
        m = m % 12;
      }
    }

    if (d === 0) {
      m--;
      d = 28;

      if (m === 0) {
        y--;
        m = 12;
      }
    }

    if (y < year) return false;
    else if (y === year) {
      if (m < month) {
        return false;
      } else if (m === month) {
        if (d < day) {
          return false;
        }
      }
    }

    return true;
  }

  let i = 1;
  privacies.forEach((privacy) => {
    const [date, type] = privacy.split(' ');
    const [y, m, d] = date.split('.').map(Number);

    if (compareDay(y, m, d, termsMap.get(type)) === false) {
      res.push(i);
    }

    i++;
  });

  return res;
}

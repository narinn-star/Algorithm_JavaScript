/**
 * Topics: 2022 KAKAO BLIND RECRUITMENT
 *
 * 두번째 풀어본 카카오 문제!
 * 그래도 한 번 객체에 담아봤어서 꾸깃꾸깃 잘 담아 봤다. 이렇게 푸는게 맞나 싶지만 풀었잔하 ~~
 * 아마 더 간단하게 푸는 방법이 분명 있긴 할텐데 이렇게 푸는 사람도 저렇게 푸는 사람도 있는거 아니겐서 ,,
 *
 * 무튼 신고한 리스트와 신고 받은 리스트를 따로 받았다.
 * 신고한 리스트에는 신고한 사람과 신고당한(?)사람,
 * 신고 받은 리스트에는 신고당한 사람의 신고 갯수 카운팅을 위해서다.
 * 중복 신고는 Set으로 방지해줬다.
 *
 * 메일 카운팅은 다 뺑글뺑글 도는 방법을 선택했슴 이거 말고는 업서 ~~
 * 신고 갯수가 k개가 넘으면 그 유저가 포함되어 있는 신고자의 인덱스에 맞춰서 카운팅 해줬다.
 * 이 인덱스를 가져오는게 젤 힘들어서 기본 for문으로 써보려고 엄청 애썼는데 그냥 indexOf 쓰면 되는거세요 ~~ 바보엿음
 *
 * 구현문제를 풀면 다른 곳에 집중하지 않고 JS 문법을 하나씩 더 파고들 수 있어서 좋은 것 가틈
 * 끗-
 */

/**
 *
 * @param {String[]} id_list
 * @param {String[]} report
 * @param {Number} k
 * @returns {Number[]}
 */
function solution(id_list, report, k) {
  const reporting = {};
  const reported = {};

  function initReport() {
    id_list.forEach((id) => {
      reporting[id] = new Set();
      reported[id] = 0;
    });

    report.forEach((r) => {
      const [A, B] = r.split(' ');
      if (!reporting[A].has(B)) {
        reporting[A].add(B);
        reported[B]++;
      }
    });
  }

  const mailCounts = Array(id_list.length).fill(0);

  function sendMail() {
    for (const id in reported) {
      if (reported[id] >= k) {
        for (const user in reporting) {
          if (reporting[user].has(id)) {
            const index = id_list.indexOf(user);
            mailCounts[index]++;
          }
        }
      }
    }
  }

  initReport();
  sendMail();

  return mailCounts;
}

/**
 * Topics: 2024 KAKAO WINTER INTERNSHIP
 *
 * 그냥 구현 문제인데 js스럽게? 풀어보자 해서 평소 알고리즘 풀던 방식이랑은 다르게 풀어보려 했다.
 * 배열 0, 1, 2로 접근하는 것보다 이름 자체를 객체에 담아서 관리했다.
 *
 * 사람마다 선물을 보낸 갯수, 받은 갯수, 그리고 보낸사람들 명단을 넣어줬다. 그리고 gift 배열에서 그 갯수들을 더해줬다.
 * 이렇게만 해두면 다음 달에 받을 선물의 갯수를 각각 계산해주는 것만 남는다.
 *
 * 친구A와 친구B의 주고받음을 알아야하기 때문에 각각 보낸 선물의 갯수를 먼저 비교해주고,
 * 만약 서로 보낸 갯수가 같으면 (주고받지 않은 경우도 여기에 포함) 선물 지수를 계산해준다.
 * 선물 지수가 같으면 패스, 선물 지수가 다르면 더 작은 사람이 큰 사람에게 선물을 준다.
 *
 * 이 모든 계산이 끝나고 나면 결국 선물을 받는 사람이 정해지는데 그 사람의 receiveCnt를 하나 올려주면 된다.
 *
 * 마지막엔 {key: value}로 지정되어있는 nextMonthGift의 value값 중 가장 큰 값을 출력하면 된다.
 *
 * 어렵긴 한데.. 잼써
 */

/**
 *
 * @param {number[]} friends
 * @param {number[]} gifts
 * @returns {number}
 */

function solution(friends, gifts) {
  const gift = {};
  const nextMonthGift = {};

  function initGift() {
    friends.forEach((friend) => {
      gift[friend] = { receiveCnt: 0, sendCnt: 0, send: {} };
      nextMonthGift[friend] = 0;

      friends.forEach((friend2) => (gift[friend].send[friend2] = 0));
    });
  }

  function updateGift() {
    gifts.forEach((gift) => {
      const [sender, receiver] = gift.split(' ');
      gift[sender].sendCnt++;
      gift[receiver].receiveCnt++;
      gift[sender].send[receiver]++;
    });
  }

  function getGiftIndex(name) {
    return gift[name].sendCnt - gift[name].receiveCnt;
  }

  function initNextMonthGift() {
    for (let i = 0; i < friends.length; i++) {
      for (let j = i + 1; j < friends.length; j++) {
        const a = friends[i];
        const b = friends[j];

        const sendCntA = gift[a].send[b];
        const sendCntB = gift[b].send[a];

        let receiver = '';
        if (sendCntA > sendCntB) receiver = a;
        else if (sendCntA < sendCntB) receiver = b;
        else {
          const aIndex = getGiftIndex(a);
          const bIndex = getGiftIndex(b);

          if (aIndex === bIndex) continue;
          else if (aIndex > bIndex) receiver = a;
          else receiver = b;
        }

        if (receiver) nextMonthGift[receiver]++;
      }
    }
  }

  initGift();
  updateGift();
  initNextMonthGift();

  return Math.max(...Object.values(nextMonthGift));
}

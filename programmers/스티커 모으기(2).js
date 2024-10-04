/**
 * Topics: Summer/Winter Coding(~2018)
 *
 * 원형이라는 말에 지레 겁먹고 어떻게 원형을 나타낼까 먼저 생각했다. 전혀 필요없는 거였슴..
 * 처음엔 0번째부터 퐁당퐁당, 1번째부터 퐁당퐁당 한 값을 두개 비교해서 더 큰값을 반환했는데
 * 생각해보니 홀수개일 땐 이 퐁당퐁당이 적용되지 않는다는 것을 알았다.
 *
 * 그래서 홀수일 때 0번째 것을 먼저 뽑을떄와 1번째인 것을 먼저 뽑을때를 하나씩 적어보니 dp문제임을 한 번에 알았다.
 * dp1은 처음 것부터 (마지막 것은 사용 X) dp2는 두번째 것부터 (처음 것 사용 X) 이렇게 두가지로 나눠서 값을 넣어준다.
 *
 * 마지막엔 dp1과 dp2의 마지막에 담겨있는 값 중 큰 값을 반환하면 된다.
 */

/**
 *
 * @param {number} sticker
 * @returns {number}
 */

const solution = (sticker) => {
  const len = sticker.length;
  const dp1 = Array(len).fill(0);
  const dp2 = Array(len).fill(0);

  dp1[0] = sticker[0];
  dp1[1] = sticker[0];
  dp2[1] = sticker[1];

  for (let i = 2; i < len; i++) {
    if (i === len - 1) {
      dp1[i] = dp1[i - 1];
    } else {
      dp1[i] = Math.max(dp1[i - 2] + sticker[i], dp1[i - 1]);
    }

    dp2[i] = Math.max(dp2[i - 2] + sticker[i], dp2[i - 1]);
  }

  return Math.max(dp1[len - 1], dp2[len - 1]);
};

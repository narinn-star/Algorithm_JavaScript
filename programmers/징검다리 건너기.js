/**
 * Topics: 2019 카카오 개발자 겨울 인턴십
 *
 * 처음엔 그냥 while문 내에 for문 넣어서 계속 돌리면서 cnt 세어주고, cnt가 k와 같아질 때 리턴하도록 했는데
 * 시간초과는 둘째치고 값이 안나오더라 .. 예제에는 답이 3인데 나는 2가 나옴 ㅠㅠ 어쨌건 이건 처음부터 아닐거라 예상해서 다 지우고 다시 봤다.
 *
 * 두번째 접근은 슬라이딩 윈도우였다. k로 최대 점프 구간이 정해져있으니, k개씩 잘라서 그 내부에 값이 모두 k이하면..? 이라고 생각했으나
 * 까지만 생각하고 뒤는 생각을 못함. 뭔가 딱 맞아떨어지지 않는단 말이야..
 *
 * 세번째 접근은 스터디에서 얻어온 꿀팁을 이용했다. 알고리즘을 하나씩 적용해보면서 아닌것은 제외하고, 적용되는 알고리즘을 하나씩 대입해보는 것.
 * 그래서 선택한 것이 이분탐색이다. 이 문제를 보자마자 이분탐색이라고는 절대로 생각하지 못함.. 그냥 소거법 적용하다 보니 쓸 수 있는 알고리즘이
 * 이것 뿐이어서🤯
 *
 * start, end값은 문제에서 주어진 걸로 해두고, 반씩 잘라가면서 디딤돌에 적힌 숫자를 하나씩 다 보면서 카운팅 값 비교한 뒤 플래그로 표시했다.
 * 초반에는 for문 내에 if문에 계속 걸릴테니, end값이 쭉쭉 줄어들어 mid값이 5가 된다 했을 때
 * 디딤돌에 적힌 숫자가 5보다 작은 디딤돌이 k개인지 또 확인 확인 ... 무한 확인하면 됨
 * 어느새 end값이 쪼개어지고 start값이 쪼개지다보면 start === end인 지점이 되는데, 그게 정답이다.
 * 리턴은 start든 end든 아무거나 해도 됨!
 *
 * 어렵다 ..
 */

/**
 *
 * @param {number} stones
 * @param {number} k
 * @returns {number}
 */
function solution(stones, k) {
  let start = 0;
  let end = 200000000;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    let flag = true;
    let cnt = 0;

    for (let stone of stones) {
      if (stone <= mid) cnt++;
      else cnt = 0;

      if (cnt === k) {
        flag = false;
        break;
      }
    }

    if (flag) start = mid + 1;
    else end = mid;
  }

  return start;
}

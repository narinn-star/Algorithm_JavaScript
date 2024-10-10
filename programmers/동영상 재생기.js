/**
 * Topics: PCCP 기출문제
 *
 * mm:ss형태의 문자열을 다루는거라, 실제 개발환경에서도 많이 쓰기도 해서 더 재밌었던 문제였다.
 *
 * 기본적으로 시간을 계산할 땐 mm:ss 형태를 seconds로 모두 바꾸고 계산한 후에 다시 mm:ss형태로 바꿔주는게 쉽다.
 * 보편적인 것 같기도 하고..
 *
 * 그래서 timeToSeconds, secondsToTime 함수를 각각 만들어뒀고, prev, next 함수도 따로 작성했다.
 * 중요한건 10초 전후로 넘겼을 때 오프닝에 걸리는가를 확인해야해서 중간중간 냅다 다 넣어버림.. 이거 괜찮은 거 맞나 모르겠는데 최선임..
 *
 * 확실히 그냥 알고리즘보다 구현이 더 재미있기는 한데 더 복잡해지면 배로 힘들어짐 ㅠㅠ
 */

/**
 *
 * @param {String} video_len
 * @param {String} pos
 * @param {String} op_start
 * @param {String} op_end
 * @param {String[]} commands
 * @returns
 */
function solution(video_len, pos, op_start, op_end, commands) {
  function prev(time) {
    const sec = timeToSeconds(time);
    if (sec <= 10) return '00:00';
    else {
      return secondsToTime(sec - 10);
    }
  }

  function next(time) {
    const sec = timeToSeconds(time);
    const video_sec = timeToSeconds(video_len);
    if (sec + 10 >= video_sec) return secondsToTime(video_sec);
    else return secondsToTime(sec + 10);
  }

  function timeToSeconds(time) {
    const [minutes, seconds] = time.split(':').map(Number);

    return minutes * 60 + seconds;
  }

  function secondsToTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  }

  function checkOpening(time) {
    const posSeconds = timeToSeconds(time);
    const opStartSeconds = timeToSeconds(op_start);
    const opEndSeconds = timeToSeconds(op_end);

    return posSeconds >= opStartSeconds && posSeconds <= opEndSeconds;
  }

  while (commands.length) {
    if (checkOpening(pos)) pos = op_end;

    const command = commands.shift();

    if (command === 'prev') {
      pos = prev(pos);
      if (checkOpening(pos)) pos = op_end;
    } else {
      pos = next(pos);
      if (checkOpening(pos)) pos = op_end;
    }
  }

  return pos;
}

/**
 *
 * @param {String} video_len
 * @param {String} pos
 * @param {String} op_start
 * @param {*} op_end
 * @param {*} commands
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

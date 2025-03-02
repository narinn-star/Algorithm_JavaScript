/**
 *
 * @param {string[]} record
 * @returns {string[]}
 */
function solution(record) {
  const user = new Map();
  const result = [];

  record.forEach((item) => {
    const [state, uid, name] = item.split(' ');

    if (state === 'Enter' || state === 'Change') {
      user.set(uid, name);
    }
  });

  record.forEach((item) => {
    const [state, uid, name] = item.split(' ');

    const nickName = user.get(uid);

    if (state === 'Enter') {
      result.push(`${nickName}님이 들어왔습니다.`);
    } else if (state === 'Leave') {
      result.push(`${nickName}님이 나갔습니다.`);
    }
  });

  return result;
}

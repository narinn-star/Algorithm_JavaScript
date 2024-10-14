/**
 *  Topics: 연습문제
 *
 * indexOf로 callings의 이름들의 인덱스를 찾아 swap해주는 방법으로 풀었는데, indexOf때문인지 시간초과가 났다.
 * 해결 => 검색에 빠른 map을 사용해서 풀었슴.
 *
 */

/**
 *
 * @param {String[]} players
 * @param {String[]} callings
 * @returns {players}
 */

function solution(players, callings) {
  const map = new Map();

  for (let i = 0; i < players.length; i++) {
    map.set(players[i], i);
  }

  callings.forEach((name) => {
    const idx = map.get(name);
    const prev = players[idx - 1];

    if (idx > 0) {
      players[idx] = prev;
      players[idx - 1] = name;

      map.set(name, idx - 1);
      map.set(prev, idx);
    }
  });

  return players;
}

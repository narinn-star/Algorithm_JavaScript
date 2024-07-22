/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  //   const tasksMap = new Map();
  //   for (let i = 0; i < tasks.length; i++) {
  //     const t = tasksMap.get(tasks[i]);
  //     if (t) tasksMap.set(tasks[i], t + 1);
  //     else tasksMap.set(tasks[i], 1);
  //   }

  let count = Array(26).fill(0);

  for (let t of tasks) {
    count[t.charCodeAt(0) - 'A'.charCodeAt(0)]++; // 테스크 개수 세기
  }

  count.sort((a, b) => b - a); //
  let most = count[0];

  let idle = (most - 1) * n;

  for (let i = 1; i < 26; i++) {
    idle -= Math.min(most - 1, count[i]);
  }

  if (idle < 0) return tasks.length;
  else return tasks.length + idle;
};

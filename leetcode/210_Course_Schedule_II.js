/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

/**
 * Topics : Array, Binary Search, Dynamic Programming
 *
 * Problem
 *  들어야하는 강의 수 numCourses
 *  강의는 0 ~ numCourses - 1으로 labeled
 *  [ai, bi]로 주어졌을 때, ai 강의를 듣기 위해서는 bi 강의를 먼저 들어야 한다.
 *  모든 강의를 다 듣기 위한 강의 순서를 리턴. 모두 들을 수 없다면 빈 배열을 리턴.
 *
 * Explanation
 *
 *  개어려워yo..
 *  맨날 bfs로만 풀어서그런지, 재귀가 너무너무너무 어렵다. dfs로 다시 한 번 풀어봐야할 듯한..
 *  그래도 어찌저찌 풀긴 함..
 *  방문 중인 상태를 체크해주는 이유는 반복되는 강의를 체크해주기 위함이다.
 *  그리고 방문하지 않은 것이면 다시 dfs 재귀호출.
 *  for문 내부에서 false로 걸러지지 않으면 방문한 것으로 체크하고 강의 순서 배열에 추가해준다.
 *
 */

let arr;
let coursesMap;
let visited;

const findOrder = (numCourses, prerequisites) => {
  arr = [];
  coursesMap = new Map();
  visited = new Array(numCourses).fill(0);

  for (let [course, prerequisite] of prerequisites) {
    if (coursesMap.has(course)) {
      // 선행 강의 목록 O
      let val = coursesMap.get(course);
      val.push(prerequisite);
      coursesMap.set(course, val);
    } else {
      // X
      coursesMap.set(course, [prerequisite]);
    }
  }

  for (let i = 0; i < numCourses; i++) {
    if (visited[i] === 0 && !dfs(i)) return [];
  }

  return arr;
};

const dfs = (i) => {
  visited[i] = 1; // 방문 중인 상태
  let nextCourses = coursesMap.get(i);

  if (nextCourses) {
    for (let nextCourse of nextCourses) {
      if (visited[nextCourse] == 1) return false; // 방문 중인 상태면 사이클 발생 (0, 1 -> 1, 0)
      if (visited[nextCourse] == 0 && !dfs(nextCourse)) return false; // 방문 안했으면 다시 호출
    }
  }

  visited[i] = 2; // 방문 완료
  arr.push(i);
  return true;
};

console.log(findOrder(2, [[1, 0]]));
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);

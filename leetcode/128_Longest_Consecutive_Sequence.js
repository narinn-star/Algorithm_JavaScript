/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Topics : Array, Hash Table, Union Find
 *
 * Problem
 * 정렬되어 있지 않은 배열에서 연속되는 숫자의 길이를 구하는 문제.
 * sort 함수를 쓰면 안된다. O(n)으로 풀어내야 하기 때문..
 * sort 함수는 보통 nlogn정도라고 하니 내가 할 수 있는 건 O(xn)인 정도? 🫠
 *
 * Explanation
 * 첫번째 시도
 * 음수까지 고려해야하기 때문에 배열 크기는 가장 작은 수의 절댓값을 offset으로 두고, 양수 갯수에 더한 수로 배열을 선언했다.
 * 만약 nums에 있는 숫자라면 arr[num]에 1을 넣어주어 표시해뒀다.
 * 그리고 나서 다시 처음부터 돌면서 0이 나오면 연속성이 끊기는 것이므로 res값을 갱신해주고, cnt는 0으로 초기화한다.
 * 0이 아니라면 계속 cnt를 증가시키면 된다.
 *
 * -> 시간초과가 남..
 * 배열에 숫자가 너무 큰가 ? 사실 잘 모르겠다.. 값이 너무 커서 그런듯
 *
 * 두번째 시도
 * 배열이 안된다면 해시를 써보자.
 * 어차피 하나만 들어가니까 해시셋을 썼다. 음수를 고려할 필요도 없음. 알아서 음수도 척척 들어가니까 .. ~
 * 그리고 하나씩 확인하면 된다. numSet에 현재 값 num보다 작은 수 (num - 1)이 있으면 새로운 시퀀스가 시작될 필요가 없다.
 * 이미 시작된 시퀀스에 그 값은 포함되어 있을 것이니..! (연속에 집중해야함)
 * 만약 새로운 시퀀스가 시작된다면 현재 숫자를 저장해주고, 새로운 시퀀스 길이 longest를 선언한다.
 * 그리고 나서 현재 숫자부터 연속되는 길이를 찾기 위해 while문을 사용했다. 만약 바로 다음 숫자가 Set에 있다면 숫자와 길이 모두 증가시킨다.
 * 없으면 바로 나와서 최대 길이를 구해주면 끝!
 *
 * -> 왕빠름
 */

const longestConsecutive = (nums) => {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let max = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      // 현재 num - 1이 numSet에 있으면 새로 세어줄 필요 x
      let curNum = num;
      let longest = 1;

      while (numSet.has(curNum + 1)) {
        // 현재 num + 1이 numSet에 있으면 연속임을 뜻함
        curNum += 1;
        longest += 1;
      }

      max = Math.max(max, longest);
    }
  }

  return max;
  // if (nums.length === 0) return 0;
  // let offset = Math.abs(Math.min(...nums));
  // let max = Math.max(...nums) + offset

  // const arr = new Array(max + 1).fill(0);

  // nums.forEach((num) => {
  //     arr[num + offset] = 1;
  // });

  // let cnt = 0,
  //     res = 1;
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === 0) {
  //         res = Math.max(res, cnt);
  //         cnt = 0;
  //     } else cnt += 1;
  // }

  // return Math.max(res, cnt);
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

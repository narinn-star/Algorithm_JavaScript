/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Topics : Array, Two Pointers, Binary Search, Bit Manipulation
 *
 * Explanation
 * ??? 왜 medium일까..? 풀 수 있는 방법이 Two Pointers, Binary Search, Bit Manipulation까지 여러가지라서 그런걸까나?
 * 아마도 Bit Manipulation은 XOR로 풀 수 있을 것 같다. 두 번 이상 나오면 값이 0이 됐던가.. 했던 것 같다.
 *
 * 풀이보다는 Array 생성 두가지를 알 수 있었다.
 * 아래처럼 할 수 있는 방법과
 * Array.from({length: nums.length + 1}, () => 0);
 * 이렇게 두 가지 방법이 있다.
 */

const findDuplicate = (nums) => {
  let arr = Array(nums.length + 1).fill(0);

  for (let num of nums) {
    if (arr[num] >= 1) return num;
    arr[num]++;
  }
};

//console.log(findDuplicate([1, 2, 4, 2, 2]));

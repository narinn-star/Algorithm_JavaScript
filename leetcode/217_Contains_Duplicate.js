/**
 * Topics: Array, Hash Table, Sorting
 *
 * 시간을 너무 많이 써서 여러가지로 계속 풀면서 줄여나갔다.
 *
 * 1. filter() _ O(n)
 * 2. Object.values() _ O(n)
 * 3. for...of() _ O(n)
 * 4. new Set() _ O(n)
 * 5. for...of() _ O(n)
 *
 * 다섯개 다 O(n)인데 .. 그래도 젤 빠른걸 고르자면 아마 Set이다.
 * 그다음으론 3,5 다음 1, 2정도..?
 *
 * 중간에 뺄 수 있으면 바로 리턴시키는게 젤 빠른 것 같았는데 의외로 Set이 제일 빠르게 나와서 놀랐다.
 * 아마도 무조건 1번씩만 돌면 되는거라 그런 듯..!
 *
 * 쉬운문제를 풀때는 이제 이렇게 많은 방법을 시도할 수 있는 여유(?)가 생기는 것 같아서 또 다른 재미가 있숨🙃
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function (nums) {
  const map = {};

  nums.forEach((num) => {
    if (!map[num]) map[num] = 0;
    map[num]++;
  });

  const cnt = Object.values(map).filter((val) => val >= 2).length;

  return cnt >= 1 ? true : false;
};

const containsDuplicate2 = function (nums) {
  const map = {};

  nums.forEach((num) => {
    if (!map[num]) map[num] = 0;
    map[num]++;
  });

  const arr = Object.values(map);

  for (const el of arr) {
    if (el >= 2) return true;
  }

  return false;
};

const containsDuplicate3 = function (nums) {
  const map = {};

  for (const num of nums) {
    if (!map[num]) map[num] = 0;
    map[num]++;
    if (map[num] >= 2) return true;
  }

  return false;
};

const containsDuplicate4 = function (nums) {
  const set = new Set(nums);

  return set.size != nums.length;
};

const containsDuplicate5 = function (nums) {
  const map = {};

  for (const num of nums) {
    if (map[num]) return true;
    else map[num] = 1;
  }

  return false;
};

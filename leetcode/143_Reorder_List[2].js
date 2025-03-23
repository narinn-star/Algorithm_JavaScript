/**
 * Topics: Linked List, Two Pointers, Stack, Recursion
 *
 * 1. [1,2,3,4,5] => [1,5,2,4,3]
 * 여러가지 예제를 생각해보다가 mid -> null 이어야 한다는 것을 찾음
 * 2. mid값을 찾기 위해 slow, fast 투포인터 방법을 사용해서 찾고 mid -> null 만들기 성공
 * 3. 두 개로 분리된 linked list를 가지고 있는 상황에서, 두 번째 linked list 뒤집기 (해설 참고😭)
 * 4. 뒤집고 나면 [1,2,3] [5,4] 이렇게 두 개가 생김
 * 5. 1->5->2->4->3 순으로 합쳐주면 완성 ,, ~
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = slow.next;
  slow.next = null;
  let prev = null;
  while (secondHalf) {
    let tmp = secondHalf.next;
    secondHalf.next = prev;
    prev = secondHalf;
    secondHalf = tmp;
  }

  let firstHalf = head;
  while (prev) {
    let tmp1 = firstHalf.next;
    let tmp2 = prev.next;

    firstHalf.next = prev;
    prev.next = tmp1;
    firstHalf = tmp1;
    prev = tmp2;
  }
};

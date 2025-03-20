/**
 * Topics: Hash Table, Linked List, Two Pointers
 *
 * slow - fast 투포인터 문제
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;

  let a = head.next;
  let b = head.next.next;

  while (a !== b) {
    if (b === null || b.next === null) return false;
    a = a.next;
    b = b.next.next;
  }

  return true;
};

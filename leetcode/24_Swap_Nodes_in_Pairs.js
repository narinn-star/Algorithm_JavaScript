/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Topics : Linked List, Recursion
 *
 * Explanation
 * 주석 참고
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 1 -> 2 -> 3 -> 4 -> null
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let node = new ListNode(0);
  let tail = node; // 0
  let current = head; // 1 -> 2 -> 3 -> 4 -> null

  // current: 1 -> 2 -> 3 -> 4 -> null
  // current.next: 2 -> 3 -> 4 -> null
  // current.next.next: 3 -> 4 -> null

  while (current && current.next) {
    let tmp = current.next.next; // tmp : 3 -> 4 -> null

    tail.next = current.next; // 0.next : 0 -> 2 -> null
    current.next.next = current; // 2.next : 2 -> 1 -> null
    current.next = tmp; // 1.next : 1 -> 3 -> 4 -> null

    tail = current; // 0 -> 2 -> 1 -> null
    current = tmp; // 3 -> 4 -> null
  }

  return node.next;
};

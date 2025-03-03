/**
 * Topics: Linked List, Recursion
 *
 * 여전히 애먹는 ListNode.. 문제 풀이는 엄청 빨리 썼는데 도대체 제공해주는 function에 맞게 출력하려면 어떻게 다 맞춰줘야하는지
 * 맨날 감을 잃음.. 🥹
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = null;

  while (head) {
    const tmp = head.next;
    head.next = node;
    node = head;
    head = tmp;
  }
  return node;
};

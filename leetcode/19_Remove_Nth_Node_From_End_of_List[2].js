/**
 * Topics: Linked List, Two Pointers
 *
 * 전체 길이에서 n만큼 돌아오는건 너무 비효율적이고, 투포인터를 사용해서 right는 n만큼 먼저 출발한다.
 * 그 다음 left와 right 한칸씩 움직이는데, 이는 right가 끝에 도달할 떄까지 가면 된다.
 * 그런데 만약 한 칸씩 움직이기 전부터 right가 null이면 head.next를 출력하면 됨 (n === list.length)
 * right가 끝까지 도달하고 나면 left.next를 left.next.next로 해서 가리키고 있는 것을 바꿔주면 끝
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let left = head;
  let right = head;

  while (n > 0) {
    right = right.next;
    n--;
  }

  if (right === null) return head.next;

  while (right.next !== null) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;
  return head;
};

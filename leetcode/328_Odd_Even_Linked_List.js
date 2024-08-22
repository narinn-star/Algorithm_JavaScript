/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Topics : Linked List
 *
 * Problem
 * 주어진 노드에서 짝수번째와 홀수번째를 따로 묶어서 홀수번째 노드 -> 짝수번째 노드 순서로 다시 정렬(?)하는 문제다.
 *
 * Explanation
 * 홀수 head와 짝수 head를 따로 두고 각각 while문을 돌면서 다음 노드를 가리키도록 설정한다.
 * tmpHead는 마지막에 홀수 노드 끝자락에 짝수를 붙여주기 위한 head값이다.
 * even과 even.next만 null 체크를 해주는 이유는 even만 체크하면 홀수는 당연히 체크되기 때문..
 * 1->2->3->4->5
 * 1) odd = '1' -> 3 -> 4 -> 5
 *   even = '2' -> 4 -> 5
 * 2) odd = 1 -> '3' -> 5
 *   even = 2 -> '4' -> null
 * 3) tmpHead = 2 -> 4 -> null
 *    odd = 1 -> 3 -> '5'
 *    even = 2 -> 4 -> 'null'
 * 4) odd.next = tmpHead => 1 -> 3 -> 5 -> 2 -> 4
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = (head) => {
  if (head === null) return null;

  odd = head;
  even = head.next;
  tmpHead = head.next;

  while (even != null && even.next != null) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }

  odd.next = tmpHead;

  return head;
};

console.log(oddEvenList([1, 2, 3, 4, 5]));
console.log(oddEvenList(2, 1, 3, 5, 6, 4, 7));

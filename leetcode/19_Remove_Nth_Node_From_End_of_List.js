/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* Topics : Linked List, Two Pointers

Explanation
1. n만큼 left, right 간격 벌려주기
2. right.next가 null일때까지 한 칸씩 옮기기 (리스트 끝까지 가는 것)
3. left.next 노드를 없애주기 위해서 next 를 next.next로 바꿔주기
4. 처음에 root가 [0, ....]이기 때문에 next부터 리턴해주기
*/
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let root = new ListNode(0);
  root.next = head;

  let = right = root;
  let = left = root;

  while (n > 0) {
    right = right.next;
    n--;
  }

  while (right.next !== null) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;
  return root.next;
};

//console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
// [1, 2, 3, 4, 5, 6] n = 3
// [1, 2, 3, 5, 6]

/**
 * Topics: Linked List, Two Pointers
 *
 * k가 너무 커지면 rotate를 돌리는 횟수가 너무 많아지기도 하고, 무의미하기 때문에 k값을 먼저 줄여줬다.
 * 그리고 돌려야하는 경계를 찾아야하는데, 총 길이 - k - 1이 0이 되는 순간이 그 때이다. 처음엔 k > 0으로 해두고 k를 감소시키는 방법으로 했는데
 * node가 가리키는 값에 오류가 생겨서 정직하게 가기로 했슴,, k < 0이 왜 오류가 나는지는 아직 찾지 못했다.
 *
 * 그리고나서 뒷부분을 따로 떼어줘야하기 때문에 tail = node.next로 담아두고 마지막이 될 node는 연결을 끊어준다.
 * 그리고 tail의 마지막으로 가서 head를 붙여주면 된다.
 *
 * LinkedList문제 풀 때마다 참 어려운게, 어느 시점에서 head에 변형이 일어나는지 잘 이해가 가지 않는다.
 * 뭔가 습관적으로 문제를 풀고있고 풀어지긴 한데 정확하게 설명할 줄을 모르겠다...
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // 총 길이 구하기, k값 줄이기
  let tmp = head;
  let len = 0;
  while (tmp) {
    tmp = tmp.next;
    len++;
  }

  k = Math.floor(k % len);
  console.log(len);

  if (!head || k % len === 0) return head;

  // 돌리기
  let node = head;
  while (len - k - 1 > 0) {
    node = node.next;
    k++;
  }
  let tail = (res = node.next); // 4 -> 5

  node.next = null; // 끊어내기 (head부분 짜르기)
  while (tail.next) {
    tail = tail.next;
  }

  tail.next = head; // 붙이기

  return res;
};

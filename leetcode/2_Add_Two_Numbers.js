/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/* Topics : Linked List, Math, Recursion

Explanation
드디어 정신을 놔 버린건지 문제를 괴상하게 풀었다.

숫자를 뒤집지 않은 상태에서 더한 후에 뒤집은 결과를 노드로 반환하는 줄 알았다..
그래서 당연히 숫자를 만들기 위해서 calc 함수 내에서 쭉 합쳐준 후에 뒤집어서 숫자로 바꾸고 
그 두 수를 더한 값을 배열로 만들어 다시 노드로 바꿔줌..
이게 무슨 ? 풀면서도 어이가 없긴 했는데, 당연히 틀렸다.

왜냐면 숫자를 뒤집어준 후에 더한 수를 다시 뒤집어줘야하는 것이기 때문..
그럼 당연히 노드 하나씩 가면서 더해주고 올림수 저장해두고 더해주면 되는건데, 혼자서 한 번 더 꼬았다..

*/

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const calc = (sum, listNode) => {
    if (listNode === null) {
      return sum;
    }

    sum += listNode.val;
    return calc(sum, listNode.next);
  };

  const sum1 = BigInt(calc('', l1).split('').reverse().join(''));
  const sum2 = BigInt(calc('', l2).split('').reverse().join(''));

  const res = String(sum1 + sum2)
    .split('')
    .map(BigInt);

  const numberToListNode = (arr) => {
    let head = null;
    let cur = null;

    for (const num of arr) {
      const newNode = new ListNode(num);
      if (head === null) {
        head = newNode;
        cur = head;
      } else {
        cur.next = newNode;
        cur = newNode;
      }
    }
    return head;
  };

  return numberToListNode(res.reverse());
};

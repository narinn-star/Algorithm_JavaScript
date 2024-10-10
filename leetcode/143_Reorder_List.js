/**
 * Topics: Linked List, Two Pointers, Stack, Recursion
 *
 * 도저히 모르겠어서 정답을 봤다. 가운데 지점을 찾는 것 까지만 내가 했음..
 * 연결리스트에서 mid값을 찾는 건 많이 해봐서 이제 slow, fast로 찾는 게 쉬운데 뒤집는 로직이 전혀 떠오르지 않았다.
 * 뒤집을 때는 뒷 부분만 뒤집으면 앞부분, 뒷부분 한 번씩 꺼내서(?) 연결하면 된다고 생각했는데 그 뒤집는걸 못해서 답을 봤다.
 *
 * 우선 동작 방식을 먼저 말하면
 * 1 -> null , 2 -> 1 -> null, 3 -> 2 -> 1 -> null ...
 * 이렇게 되는데, 이게 동작 방식을 먼저 보면 쉬워보이는데 나는 연결리스트에 .next 또는 cur = prev.next; ... 이렇게
 * 새로운 노드를 가리키는 식이 여러개일 때 머리가 엄청 복잡해져서 정지되어버림 ㅠㅠ
 *
 * slow = 1이라 치고 시작.
 * 먼저 처음에 null으로 초기화해주고, 중간값부터 뒤집으면 되니까 current에 slow를 넣는다.
 * prev = null, current = 1
 * slow부터 끝까지 돌면서 뒤집을거니까 while문에는 current가 존재할 때만 돌도록 한다.
 * 첫 루프
 * next = current.next // next = 2
 * current.next = prev // current.next = null => 1 -> null
 * prev = current // prev = 1
 * current = next // current = 2
 *
 * 두번째 루프
 * next = current.next // next = 3
 * current.next = prev // current.next = 1 => 2 -> 1 -> null
 * prev = current // prev = 2
 * current = next // curretn = 3
 *
 * ... 이렇게 하다보면 4 -> 3 -> 2 -> 1 -> null 이렇게 완성됨 !
 *
 * 이제 하나씩 꺼내서 이어주기만 하면 된다.
 *
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
const reorderList = (head) => {
  if (!head || !head.next) return;

  // mid 찾기
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 반쪽 뒤집기
  let prev = null;
  let current = slow;
  while (current) {
    // 1 -> null , 2 -> 1 -> null, 3 -> 2 -> 1 -> null ...
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // linkedList 만들기
  let front = head;
  let rear = prev;
  while (rear.next) {
    let tmp1 = front.next;
    let tmp2 = rear.next;

    front.next = rear;
    rear.next = tmp1;

    front = tmp1;
    rear = tmp2;
  }
};
